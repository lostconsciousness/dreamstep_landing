import Header from './components/Header';
import Footer from './components/Footer';
import Introduction from './sections/Introduction';
import OurGoal from './sections/OurGoal';
import AppFunctions from './sections/AppFunctions';
import Staking from './sections/Staking';
import PhotoExamples from './sections/PhotoExamples';
import AvailableSkins from './sections/AvailableSkins';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Introduction />
        <OurGoal />
        <AppFunctions />
        <Staking />
        <PhotoExamples />
        <AvailableSkins />
      </main>
      <Footer />
    </>
  );
}
