import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import HomeComp from "../pages/home/HomeComp";
import TvshowLayout from "../layout/TvshowLayout";
import MoviesLayout from "../layout/MoviesLayout";
import JoinLayout from "../layout/JoinLayout";
import JoinPrime from "../pages/join/JoinPrime";
import CreateLayout from "../layout/CreateLayout";
import Create from "../pages/create/Create";
import Card1 from "../pages/home/Card1";
import GenresLayout from "../layout/GenresLayout";
import Genres from "../pages/genres/Genres";
import MovieComp from "../pages/movies/MovieComp";
import TvComp from "../pages/tvshows/TvComp";
import HelpLayout from "../layout/HelpLayout";
import Help from "../pages/help/Help";
import SignupLayout from "../layout/SignupLayout";
import Signup from "../pages/signup/Signup";
import WatchLayout from "../layout/WatchLayout";
import Watch from "../pages/watch/Watch";


export const element = createBrowserRouter(
    [
        {

    path:"/",
    element: <HomeLayout/>,
    children: [{
        index: true,
        element: <HomeComp/>
    }
]
},
 {

    path:"/tvshow",
    element: <TvshowLayout/>,
    children: [{
        index: true,
        element: <TvComp/>
    },
   
]
},
 {

    path:"/movies",
    element: <MoviesLayout/>,
    children: [{
        index: true,
        element: <MovieComp/>
    },

]
},
{

    path:"/joinprime",
    element: <JoinLayout/>,
    children: [{
        index: true,
        element: <JoinPrime/>
    }
]
},
{

    path:"/create",
    element: <CreateLayout/>,
    children: [{
        index: true,
        element: <Create/>
    },
    {
        path:"card",
        element: <Card1/>
    }
]
},
{

    path:"/genres",
    element: <GenresLayout/>,
    children: [{
        index: true,
        element: <Genres/>
    }
]
},

{

    path:"/help",
    element: <HelpLayout/>,
    children: [{
        index: true,
        element: <Help/>
    }
]
},
{

    path:"/signup",
    element: <SignupLayout/>,
    children: [{
        index: true,
        element: <Signup/>
    }
]
},
{
    path:"/watch",
    element: <WatchLayout/>,
    children: [{
        index: true,
        element: <Watch/>
    }]
}
])