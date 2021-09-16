import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

import SectionForm from './components/sectionform';
import Info from './components/Info';
import Drinks from './components/drinks';
import Contact from './components/contact';
import Footer from './components/footer';
import IntroTitle from './components/introTitle';
function App() {
  return (
    <div className="App">
        <Header></Header>
        <IntroTitle/>
        <SectionForm 
            class="about"
            section ="ABOUT"
            title="The STORY OF BATHHUB GIN"
            description="Gin was the predominant drink in the United States during the Prohibition-Era 1920's and many variations were created. 'Bathtub gin' was developed in response to the poor-quality of alcohol that was available at the time."
            button="Read More"
        >
        </SectionForm>
        <Info></Info>
        <SectionForm 
            class="menu"
            section ="Cocktail & Food Menus"
            title="Hand Crafted
Cocktails & Damn
Good Eats"
            description="We mix our gin and other spirits with the finest and freshest fruits, juices, syrups and infusions in cocktails inspired by original recipes."
            button="See Menus"
        >
        </SectionForm>
        <Drinks></Drinks>
        <Contact></Contact>
        <Footer></Footer>
    </div>
  );
}

export default App;
