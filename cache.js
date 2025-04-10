const redis = require ('redis')

const client = redis.createClient({ username: 'default',
         password: '8BDhEOLJqtseB0waMB9pYUycP371e5OC',
         socket: {
             host: 'redis-17778.c266.us-east-1-3.ec2.redns.redis-cloud.com',
             port: 17778
}});

client.on('error', err => console.log('Redis Client Error', err));

async function teste() {
    await client.connect();

    const produtos = [{id: 1, nome: "camisa"}, {id: 2, nome: "luva"}]
    // await client.del('produtos') seria pra deletar um cache, porém talvez não precise, pois, quando dá um .set ele já sobrescreve. 
    await client.set('produtos', JSON.stringify(produtos), {EX: 2});
    return JSON.parse(await client.get('produtos'));
}

teste().then ((res) => {
    console.log('produtos: ', res)

    setTimeout(async function(){
        console.log("produtos depois de 3 segundos: ", JSON.parse(await client.get('produtos')))
    }, 3000)
})