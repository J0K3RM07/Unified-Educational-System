import Header from "../../layout/header/Header";
import Footer from "../../layout/footer/Footer";
import Events from "./Events/Events";
import Learning from "./Learning/Learning";
import Lectures from "./Lectures/Lectures";
import News from "./News/News";
import Progress from "./Progress/Progress";


const Main = () => {
    return (
        <div className="container">
            <Header />
            <Learning />
            <Lectures />
            <Progress />
            <News />
            <Events />
            <Footer />
        </div>
    );
}
 
export default Main;