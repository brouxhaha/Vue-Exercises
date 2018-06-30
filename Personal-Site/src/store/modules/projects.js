const state = {
    projects: [{
            id: 'travel-alaska',
            name: 'State of Alaska & Alaska Travel Industry Association',
            description: '&lt;TravelAlaska.com is the official State of Alaska travel website. This current iteration of the design evolved from a redesign done at the end of 2015 that greatly expanded the size and use of images and did not try to cram all the content into a small area so it was all visible all the time.&gt;&lt;The focus of this latest design update was to try to invoke inspiration to travel to Alaska. To do so, even larger imagery was incorporated and more images were used throughout the site. The Get Inspired section of the site now has a distinct landing page to try to better accomplish inspiring people to travel to Alaska.&gt;',
            homeImg: '/src/assets/travel-alaska_initial_2000x1200.jpg'
        },
        {
            id: 'anchorage-library',
            name: 'Anchorage Public Library',
            description: '',
            homeImg: '/src/assets/anchorage-library_initial_2000x1200.jpg'
        },
        {
            id: 'visit-ketchikan',
            name: 'City of Ketchikan',
            description: '',
            homeImg: '/src/assets/visit-ketchikan_initial_2000x1200.jpg'
        },
        {
            id: 'anchorage-museum',
            name: 'Anchorage Museum',
            description: '',
            homeImg: '/src/assets/anchorage-museum_initial_2000x1200.jpg'
        }
    ]
};

const getters = {
    projects: state => {
        return state.projects;
    }
};