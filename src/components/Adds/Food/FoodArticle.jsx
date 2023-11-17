import React from 'react';
import caption from './caption.jpg';
import pickels from './pickels.jpg';
import cofee from './cofee.jpg';
import chief from './chief.jpg';
import koshary from './koshary.jpg';
import Navbar from '../../navbar/Navbar';
import './FoodArticle.css';
import Footer from '../../../footer/Footer';
const FoodArticle = () => {
  return (
    <div className="container-artical">
      <Navbar />
      <div className="container  atricleContainer">
        <div>
          <h1 className="mb-5 text-center">
            Exploring Cairo’s street food scene
          </h1>
          <img src={caption} alt="Image 1" className="img-caption" />
        </div>

        <div className="atricle-inner-box">
          <p>
            After three bites of macarona bechamel, I foreshadowed returning to
            my room at the Steigenberger Hotel Cairo and collapsing onto my bed
            in a calorie-laden stupor 'til morning. I would thank Bellies En
            Route’s food tour for the deliciously uncomfortable gift and let the
            sheep count me [to sleep].
            <br />
            <br />
            Macarona bechamel is the first dish on their whirlwind, eight-stop
            food tour through downtown Cairo. The women behind the culinary
            trek, Laila Hassaballa and Mariam Nezar, are calling their
            gastronomical exploration of the Egyptian street food scene a first
            of its kind for Cairo. They’re not likely to receive much pushback
            on that claim.
            <br />
            <br />
            Before participating, I, probably like you, had no idea what
            Egyptians ate. Egypt, particularly Cairo, is popular to Westerners
            because of the Pyramids, the history, the Nile, but not food. No
            one’s booked a flight to the North African country with the
            intention of seeking out fava bean soup or a street cart’s unique
            take on falafel. Bellies En Route is optimistic they can change that
            for some.”Our food tour shows that there’s even more to discover in
            Egypt passed the history and the well-known things. It’s also
            perfect for the travelers who want a real sense of local life in
            Cairo, what people eat and how it was shaped by so many cultures and
            influences from other continents,” Laila explains as we start our
            walk.
            <br />
            <br />
            “Our food tour shows that there’s even more to discover in Egypt
            past the history and the well-known things. It’s also perfect for
            the travelers who want a real sense of local life in Cairo, what
            people eat and how it was shaped by so many cultures and influences
            from other continents,” she continues as we navigate Cairo’s
            bustling street.
          </p>
          <img src={pickels} alt="Image 1" className="img-cofee" />

          <p className="small-text text-muted">
            Eric Berry (L) dining with Laila Hassaballa (R) of Bellies En-Route
            food toursImage:{' '}
            <span style={{ textDecoration: 'underline' }}>
              Eric Berry/ Travel Coterie
            </span>
          </p>
          <p>
            Most of their tours begin at an eatery on an unassuming street near
            Tahir Square. It’s here that a large slice of that macarona bechamel
            is slid onto the table as soon as Laila and I are seated. This carb
            heavy dish is reminiscent of lasagna to me, although its origins are
            not Italian. Substitute lasagna noodle for penne as your base carb
            and add bechamel sauce, minced meat with onions, garlic, and spices.
            Top that with a scoop of tomato sauce and you have macarona
            bechamel.
            <br />
            <br />
            “Egyptian culture has a lot of influences from a lot of different
            cuisines,” Laila continues. “This is something that is inspired by
            the Greek dish, pastitsio. Even though this didn’t really originate
            here, it’s been here for over a hundred years and it’s something we
            really consider local.”
            <br />
            <br />
            The pasta is accompanied by muyyet salata–also known by its much
            more hipster-friendly nickname: salad water. This, I am informed, is
            typically scarfed down before the main course. It is pungent,
            offensive to my nostrils, but those adjectives don’t convey the
            taste, which is actually refreshing. The combination of vinegar,
            oil, lemon, dill, salt, pepper, garlic, cucumber, and chili powder
            served in a tin cup goes down easy. The bechamel? Not so much.
          </p>
          <img src={cofee} alt="Image 1" className="img-cofee mb-5" />

          <p>
            We don’t stay long before venturing to our next stop, a personal
            favorite I would soon discover. Felfela is old school. For nearly 60
            years, the folks here have been offering up some truly delicious
            Egyptian classics. Adhering to my mostly vegetarian diet, Laila
            orders a lentil soup, three fava bean dishes, and fried eggplant.
            Meat is considered a luxury item in a country where the average
            annual wage is $2,000, so for natives, fava beans have become the
            main source of protein. With this particular legume being plentiful,
            Egyptians have developed multiple ways to prepare them.
            <br />
            <br />
            We try three: ful, taamiya, and besara. Ful is a slow-cooked sort of
            bean soup. Taamiya is Egypt’s take on Falafel and it is infinitely
            better than its more famous relative. Instead of using chickpeas for
            the base, Egyptians use fava beans and various herbs like cilantro,
            parsley, dill, and onion with spices and sprinkles of sesame seeds
            on the exterior. The combination makes for a fluffy, moist and
            flavorful end product. The besara is more or less a hummus with its
            origins traced back to rural farm areas before becoming more widely
            adopted. It is the least memorable.
          </p>
          <img src={chief} alt="Image 1" className="img-cofee mb-5" />
          <p>
            And then like a gift from Ramses II during a fruitful harvest, we
            are served betengan ma’li, a fried eggplant seasoned with the
            slightly spicy, garlicky da’aa – an Egyptian salsa. This is the
            highlight for Laila. “I absolutely love the betingan ma’li because
            it’s so simple, yet packs tons of flavor. It can be served with so
            many other dishes, making it something I never get bored of.”
            <br />
            <br />
            It’s the other eggplant dish that steals the show for me, an
            Egyptian baba ganoush that has taken the people in the kitchen
            decades to perfect. It is one of their signature sides and one of
            the few dishes from the country that have been stuck with me since
            returning home.
          </p>
          <img src={koshary} alt="Image 1" className="img-cofee" />
          <p className="small-text text-muted">
            Eric Berry waiting for a food vendor to prepare a plate of Egyptian
            Koshari, Image:
            <span style={{ textDecoration: 'underline' }}>
              Eric Berry/ Travel Coterie
            </span>
          </p>
          <p>
            We stopped at several other restaurants and an Arabic coffee house
            before arriving at our final dining destination. This is where it
            seems most people stop once or twice a week after work to grab a
            plate of Egypt’s national dish.
            <br />
            <br />
            “Koshari is super filling, delicious and extremely cheap, it also
            happens to be wonderfully vegan,” Laila shares. It is also a massive
            heap of carbs invented by some mad person that one day decided to
            toss as many carbs as he could find inside a bowl. The fundamental
            ingredients are boiled macaroni, spaghetti, vermicelli, lentils,
            rice, whole hummus, and fried onions. That’s topped off with tomato
            sauce and a garlic and vinegar dressing that you mix into the bowl
            of sleep. It is heavy on the eyes and stomach but light on the
            wallet.
            <br />
            <br />
            Laila and I end our night on a rooftop discussing the Egypt that was
            and is. We are full and hopeful that sips of hot green tea will help
            delay the imminent onset of lethargy. I did not know what to expect
            on this tour but left it as Laila hopes all guests do: smiling and
            full. “We want people to walk away with a memorable experience that
            is informative and definitely fun. We want people to remember that
            time they ate their way through the streets and alleyways of
            downtown Cairo,” she concludes.
            <br />
            <br />
            If a culinary street adventure sounds like a great way to pass a
            free evening in Cairo, book a tour with Bellies En Route by visiting
            their website.
            <br />
            <br />
            <i>
              {' '}
              This{' '}
              <span style={{ textDecoration: 'underline', fontWeight: '600' }}>
                article
              </span>{' '}
              originally appeared on{' '}
              <span style={{ textDecoration: 'underline', fontWeight: '600' }}>
                TravelCoterie,
              </span>
              , a Black-owned publication featuring travel news, tips, and
              cultural experiences.
            </i>
          </p>
        </div>
        <div className="articleComment">
          <div className="row">
            <div className="col-md-2 mb-3">
              <img
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/e4/e7/c3/caption.jpg?w=100&h=-1&s=1"
                alt="aa"
              />
            </div>
            <div className="col-md-10">
              <h6>
                Eric Berry for TravelCoterie in partnership with Tripadvisor
              </h6>
              <p>
                Eric has revolved in and out of passport controls for over 20
                years. From his first archaeological field school in Belize to
                rural villages in Ethiopia and Buddhist temples in Laos, Eric
                has come smile to smile with all walks of life. A writer,
                photographer and entrepreneur, the LA native believes the power
                of connectivity and community is enriched through travel.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FoodArticle;
