const MusicForm = (props) => {
    return ( 
        <figure>
            <img src={props.src} alt="" />
            <h3>{props.kind}</h3>
            <h5>{props.date}</h5>
            <h6>{props.time}</h6>
            <p>{props.text}</p>
        </figure>
     );
}
 
export default MusicForm;
