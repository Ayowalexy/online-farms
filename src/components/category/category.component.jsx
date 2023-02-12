import './category.styles.scss'
import { useNavigate } from 'react-router-dom';

const CategoryItem = ({category}) => {
    const {imageUrl, title, texts, id} = category;
    const navigate = useNavigate();
  return (
    <div className="category-one" onClick={() => navigate(`/category/${id}`)}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-text">
        <h4>{title}</h4>
        <p>{texts}</p>
      </div>
    </div>
  );
};
export default CategoryItem;
