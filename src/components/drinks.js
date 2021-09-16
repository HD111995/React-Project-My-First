import DrinkForm from "./drinkForm";

const Drinks = () => {
    return ( 
        <section className="drinks">
        <DrinkForm
            src="img/coc.jpg"
            description="“A trick door opening to Bathtub Gin,
             a hopping Chelsea gin joint harkening back
              to the days of false store fronts”"
            name="The Guardian"
        >
        </DrinkForm>
         <DrinkForm
         src="img/jack.jpg"
         description="“Life on the inside: exactly how you
          imagined it’d be... nailhead-tucked bar stools
           and—smack-dab in the center of the room—a glass-covered,
            claw-foot bathtub.”"
         name="URBAN DADDY"
     >
     </DrinkForm>
     </section>
     );
}
 
export default Drinks;