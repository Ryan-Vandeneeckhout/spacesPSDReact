import { ContactPage } from "./sections/ContactPage/contactPage";
import { LandingPage } from "./sections/LandingPage/landingPage";
import { OurPracticePage } from "./sections/OurPractice/ourPracticePage";
import { SpacesBottomAddressesPage } from "./sections/SpacesBottomAddressesPage/SpacesBottomAddressesPage";
import { Spotlight } from "./sections/Spotlight/spotlight";
import { WordFromOurClients } from "./sections/WordFromOurClientsPage/wordFromOurClient";

export const Main = ({ NavChangeStyleSectionsInView }) => {
  return (
    <main>
      <LandingPage />
      <div ref={NavChangeStyleSectionsInView}>
        <OurPracticePage />

        <Spotlight />
        <ContactPage />
        <WordFromOurClients />
        <SpacesBottomAddressesPage />
      </div>
    </main>
  );
};
