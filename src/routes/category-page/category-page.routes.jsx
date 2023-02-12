import { useParams } from "react-router-dom";
import { useEffect, useState} from "react";
import CategoryData from '../../category-data.json'
import { useNavigate } from "react-router-dom";

const CategoryPage = () => {
    const [ categoryProducts, setCategoryProducts ] = useState({});
    const [data, setData] = useState([]);
    const params = useParams();

    const navigate = useNavigate();
    const handleNavigate = (id) => {
        navigate(`/productPage/${id}`);
    }

    const fetchData = async() => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const resJson = await res.json();
        setData(resJson);
    }
    useEffect(() => {
        fetchData();
        const categoryInfo = CategoryData.find((element) => element.id === Number(params.id))
        console.log("categorydata", categoryInfo);
        setCategoryProducts(categoryInfo);
    }, [params])
    
    console.log(params)
    console.log(categoryProducts);
    return(
        <div>
        {categoryProducts.title}
        <div>
        {categoryProducts.products?.map(({imageUrl, name, price, id}) => (
            <div onClick={() => handleNavigate(id)}>
            <img src={imageUrl} alt=""/>
            <p>{name}</p>
            <p>{price}</p>
            </div>
        ))}
        </div>
        {data.map((userData) => (
           <div>
           {userData.name}
           {userData.email}
           </div>
        ))}
        </div>
    )
}
export default CategoryPage;