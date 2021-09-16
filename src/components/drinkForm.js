const DrinkForm = (props) => {
    return ( 
        <article className="drink">
            <img src={props.src} alt="" />
            <p>{props.description}</p>
            <h6>{props.name}</h6>
        </article>
     );
}
 
export default DrinkForm;