import Vue from 'vue';
import Vuex from 'vuex';
//import projects from './modules/projects';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        projects: [{
                id: 'travel-alaska',
                name: 'State of Alaska & Alaska Travel Industry Association',
                launchDate: 'April 2018',
                description: '<p>TravelAlaska.com is the official State of Alaska travel website. This current iteration of the design evolved from a redesign done at the end of 2015 that greatly expanded the size and use of images and did not try to cram all the content into a small area, so it was all visible all the time.</p><p>The focus of this latest design update was to invoke inspiration for travel to Alaska. To do so, even larger imagery was incorporated and more images were used throughout the site. The Get Inspired section of the site was renamed from Experience Alaska and now has a distinct landing page with way less text.</p><p>Visual design updates included a change in colors and fonts used on the site. This design has a more polished feel with the addition of dark backgrounds used throughout. The site headings previously used Amatic which is a handwritten, rougher type; we changed from using that and Fira Sans (which I still really like) to the more geometric font Azo Sans.</p>',
                homeImg: '/src/assets/travel-alaska_initial_2000x1200.jpg',
                projectImgs: ['_home_full'],
                website: 'https://www.travelalaska.com'
            },
            {
                id: 'visit-ketchikan',
                name: 'City of Ketchikan',
                launchDate: 'February 2018',
                description: '<p>The city of Ketchikan is a cruise port in Southwest Alaska. The prior design used background images with content laid over most of them. It also used some smaller images scattered throughout the site. The home page had a slideshow and a couple boxes leading off to other areas of the site. The goal of this latest design was to incorporate larger and more interesting imagery. It also needed to tie the site together with the Ketchikan Stories website—the reason I went with a dark background.</p><p>Ketchikan is such an interesting place with great cultural history and awesome nature nearby. I felt a video would better portray these aspects of the city, so the banner images became a looped video with multiple links just underneath to the points of emphasis.</p>',
                homeImg: '/src/assets/visit-ketchikan_initial_2000x1200.jpg',
                projectImgs: ['_home_full', '_about-videos_full', '_things-to-do-lounges_full'],
                website: 'https://www.visit-ketchikan.com'
            },
            {
                id: 'anchorage-library',
                name: 'Anchorage Public Library',
                launchDate: 'November 2017',
                description: '<p>The Anchorage Public Library was in desperate need of a redesign. The overall site looked extremely dated, and it was difficult to find anything on the home page because of how cluttered it was: there were links everywhere and images linking to programs and services had no text indicating what they were or even the name (unless the image actually had the name in it).</p><p>The design we went with was inspired by my work on the Anchorage Museum, which the Library really liked—a more open feel with little to distract from the content and headings that really separated sections of content. The site structure was reorganized and really helped distinguish the content.</p>',
                homeImg: '/src/assets/anchorage-library_initial_2000x1200.jpg',
                projectImgs: ['_home_full', '_ebooks-music-movies_full'],
                website: 'http://www.anchoragelibrary.org'
            },
            {
                id: 'anchorage-museum',
                name: 'Anchorage Museum',
                launchDate: 'September 2014',
                description: '<p>Before the redesign, the Anchorage Museum used a very geometric design with "quilts" (images and blocks of color with text all abutted in a square or rectangular shape). The initial redesign began when they requested an exhibition page redesign for their next exhibit. It was more open, used a larger banner image, and had its own navigation. They wanted exhibits to feel like their own microsites.</p><p>The exhibition redesign evolved with the overall redesign, but the basic premise of it permeated the rest of the site. Overall, the site uses mostly neutral colors in order to put the emphasis on the images and art. Exhibitions are the one area where a bright color might be chosen to complement the banner image.',
                homeImg: '/src/assets/anchorage-museum_initial_2000x1200.jpg',
                projectImgs: ['_home_full', '_current-exhibits_full', '_exhibit_full'],
                website: 'https://www.anchoragemuseum.org'
            }
        ]
    }
});