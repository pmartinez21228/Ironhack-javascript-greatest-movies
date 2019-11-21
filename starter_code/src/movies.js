/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array){
    let copy = [...array];
    copy.sort( (a, b)=>{
      if(a.year < b.year){
        return -1;
      } else if(b.year < a.year){
        return 1
      } else{
        if(a.title < b.title){
          return -1;
        } else if(b.title < a.title){
          return 1;
        } else{
          return 0
        }
      }
    })
    return copy
  }
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(array){
    let spielbergDrama = array.filter( (eachMovie)=>{
       return eachMovie.genre.includes("Drama") && eachMovie.director == "Steven Spielberg";
    })
    if(spielbergDrama.length == 0){
      return 0;
    } else{
      return spielbergDrama.length
    }
  }
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(array){
    if(array.length == 0){
        return 0
    }
    let ratedMovies = array.filter( (eachMovie)=>{
        return eachMovie.rate == true
    })
    let rates = array.map( (eachMovie)=>{
      return eachMovie.rate
    })
    let sumRates = rates.reduce( (a, c)=>{
      return a + c
    })
    return (sumRates / array.length).toFixed(2)
  }
// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
