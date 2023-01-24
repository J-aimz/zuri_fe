import { createContext, useEffect, useReducer } from "react"



export const MovieDataContext = createContext()


function MovieDataContextProvider({children}) {

  const [state, dispatch] = useReducer((state, action) =>{
    switch (action.type) {
      case 'id':
        return {...state, id: action.payload }
        break;
      case 'data':
        return {...state, data: action.payload }
        break
      case 'openModal':
        return {...state, openModal: action.payload}
        break
      case 'castDetails': 
        return {...state, castDetails: action.payload}
        break
      case 'myList':
        return {...state, myList: JSON.parse(localStorage.getItem('myList'))}
        break
      case 'browseHeroVdieo':
        return {...state, playBrowseHeroVideo: action.payload}
        break
      default:
        return {...state}
        break;
    }

  },{
    id: '',
    data: {},
    openModal: false,
    castDetails: null,
    myList: null,
    playBrowseHeroVideo: true
  })

  useEffect(() =>{
    async function getMovieInfo() {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${state.id}?api_key=5074cb80b6f8fff0f1907b839a453b4e&language=en-US`)
      const data = await res.json()
      dispatch({type: 'data', payload: data})

    }

    async function getCredits() {
      const res = await fetch(` https://api.themoviedb.org/3/movie/${state.id}/credits?api_key=5074cb80b6f8fff0f1907b839a453b4e&language=en-US`)
      const data = await res.json()
      dispatch({type: 'castDetails', payload: data.cast})
    }

    getMovieInfo()
    getCredits()
  }, [state.id])

 
  
  return (
    <MovieDataContext.Provider value={{
      movieData: state,
      dispatch
    }}>
      {children}
    </MovieDataContext.Provider>
  )
}

export default MovieDataContextProvider