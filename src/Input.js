
import colornames from 'colornames'

const Input = ({colorValue , setColorValue ,setHexValue ,isDarkText , setDarkText}) => {
    return (
         <form onSubmit={(e)=> e.preventDefault()}>
            <label>
                Enter Color :
            </label>
            <input
                autoFocus
                type="text"
                placeholder="Add color Name"
                required
                value={colorValue}
                onChange = {(e)=>{setColorValue(e.target.value) 
                setHexValue(colornames(e.target.value))}}>
              
            </input>
            <button type="button"
            onClick = { () => setDarkText(!isDarkText)}>
                Toggle Text Color
            </button>
         </form>

    )
}

export default Input