import { SiteClient } from 'datocms-client';

export default async function requestsReceiver(request, response) {
    
    if(request.method === 'POST') {
        const TOKEN = '9601d1d34c97150b1fb50bf5ce797d'
        const client = new SiteClient(TOKEN)
    
        const recordCreated = await client.items.create({
            itemType: "972031",
            ...request.body,
        })
    
        response.json({
            dados: 'algum dado criado',
            recordCreated: recordCreated
        })
        return
    }
    response.status(404).json({
        message: 'Ainda não temos nada no GET, mas no POST tem!'
    })
}