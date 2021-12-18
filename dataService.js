
var catalog = [
    {
        _id: "1223",
        title: "Avengened Sevenfold",
        price: 19.99,
        stock: 12,
        image: "https://sp.yimg.com/ib/th?id=OP.n8nLe0fRqBGJQQ474C474&o=5&pid=21.1&bw=0&bc=FFFFFF",
        category: "rock"
    },
    {
        _id: "1223",
        title: "Highly Suspect",
        price: 19.99,
        stock: 12,
        image: "https://tse4.mm.bing.net/th?id=OIP.6oB0YJZxEosHUa3bvKUdDgHaHa&pid=Api&P=0&w=300&h=300",
        category: "rock"
    },
    {
        _id: "1223",
        title: "J Cole",
        price: 19.99,
        stock: 12,
        image: "https://tse1.mm.bing.net/th?id=OIP.6bwHiHgMrR1qtKuF_WYlBQHaHa&pid=Api&P=0&w=300&h=300",
        category: "rap"
    }
];



class DataService {

    getCatalog() {
        // do the magic to connect to the server
        //and retrieve the catalog

        //return moch data
        return catalog;
    }
}

export default DataService;