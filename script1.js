function fun(){
    const city_name=document.getElementById('city').value;
    const output_ele=document.getElementById('output');
    const API_key='6c17906d3117425660ac059320d3ada1';
    const url='https://api.openweathermap.org/data/2.5/weather?q={city_name}&appid={API_key}';
    console.log("HII");
    fetch(url)
       .then(response=>{
          if(!response.ok){
            throw new Error('Network response was ok');
          }
        return response.json();
        })
        .then(data=>{
           output_ele.textContent=JSON.stringify(data,null,2);
        })
        .catch(error=>{
           console.error('Error:',error);
        });
}
const button=document.getElementById('sbt-btn');
fun()
button.addEventListener('click',fun);