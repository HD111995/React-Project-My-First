const SectionForm = (props) => {
    return ( 
        <section className={props.class}>
            <div>
            <p>{props.section}</p>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <a href="">{props.button}</a>
            </div>
        </section>
        
     );
}
 
export default SectionForm;