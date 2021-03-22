function updateDisplay(newValue)
        {
            var d = document.getElementById('display');

            switch(newValue)
            {
                case '0':
                case '1': 
                case '2': 
                case '3': 
                case '4': 
                case '5': 
                case '6': 
                case '7': 
                case '8': 
                case '9': 
                    if(d.innerHTML === "Err")
                    {
                        break;
                    }
                    d.innerHTML += newValue;
                    break;

                case 'AC': 
                    d.innerHTML = '';
                    break;

                case '+': 
                case '-': 
                case '*': 
                case '/': 
                    if(d.innerHTML.length == 0)
                    {
                        break;
                    }
                    else if(d.innerHTML.endsWith('/') || d.innerHTML.endsWith('*') || d.innerHTML.endsWith('-') || d.innerHTML.endsWith('+'))
                    {
                        break;
                    }
                    else if(d.innerHTML === "Err")
                    {
                        break;
                    }
                    else
                    {
                        d.innerHTML += newValue;
                        break;
                    }
                case '=': 

                    if(d.innerHTML.length == 0 || d.innerHTML.endsWith('/') || d.innerHTML.endsWith('*') || d.innerHTML.endsWith('-') || d.innerHTML.endsWith('+'))
                    {
                        d.innerHTML = "Err";
                        break;
                    }
                    else
                    {
                        d.innerHTML = eval(d.innerHTML);
                        break;
                    }
            }
        }