import Button from "../src/components/button.js";
import setContent from "../src/core/utils.js";

setContent(
    Button(
        {
            text : "Hello",
            onclick : () => {
                alert("Hello")
            },
            modifier : {
                fontFamily : "Jetbrains Mono",
                width : '8rem',
                hover : {
                    color : "black"
                }
            }
        }
    )
)