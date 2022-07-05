import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Dimensions, StatusBar, Image, ScrollView, FlatList } from "react-native";
import {Picker} from '@react-native-picker/picker';
const { width, height } = Dimensions.get('screen')

import axios from 'axios';
import { render } from "react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod";
const ordered_item = ({ navigation, route }) => {
    const [loading, setLoading] = useState(false);
    const [days,setdays]=useState(["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"]);
    const [a,seta]=useState(days);

    const [b,setb]=useState(["01","02","03","04","05","06","07","08","09","10","11","12"]);
    const [c,setc]=useState([]);
    const [selectC, setSelectedC] = useState();
    const [selectA, setSelectedA] = useState();
    const [selectB, setSelectedB] = useState();
    const [Stutas_Bar_background, setStutas_Bar_background] = useState("#68B9D4")
    const [Profile_background, setProfile_background] = useState("#2FAEC7")
  
    const [Datiles_order_background, setDatiles_order_background] = useState("#59B1CF")
    const [End_order_background, setEnd_order_background] = useState("#2FAEC7")
  
    const [order, setorder] = useState([])
    const  [the_choose_date_order, setThe_choose_date_order] = useState([])
  
    const detalies_order = () => {
      axios.get("https://generation3.000webhostapp.com/project/admin_order_data.php").then(res => {
        if (res.status == 200) {
  
          // setorder(res.data)
  
          if (res.data == 'error') {
            alert("Please Try Agin")
          }
           else if (typeof(res.data) == "object" ){
            setorder(res.data)
            setLoading(true)
           }
           else{
             alert("Try")
           }
  
        }
    
      }
  
      )
    }

    useEffect(() => {
      detalies_order()
    },[])
    
    useEffect(()=>{


try{
    
        let year=new Date().getFullYear()*1
        let mon=new Date().getMonth()*1
        let day=new Date().getDate()
       let daysInMonth = new Date(year,b[mon], 0).getDate();
//    alert()
    let arr=[year+"",year-1+""]
     setc(arr)
     setSelectedB(b[mon])
    
     seta(days.slice(0,daysInMonth))
     setSelectedA(days[day-1])
     
    
}catch(e){
    console.error(e)
}
    

    },[loading])

    useEffect(()=>{

     if(loading){
        let arr=[]
       
// alert(JSON.stringify (order))

        for(let i=0;i<order.length;i++){
          // let  details_arr=order[i].ordered_Items_details
          // console.log(JSON.stringify (details_arr))
          //   for(let j=0;j<details_arr.length;j++){
                // console.log(details_arr[j].ordered_Items_date)
            let  date_arr= (order[i].ordered_Items_date.split(' '))[0].split('-')
            // console.log(JSON.stringify(date_arr))
            if(selectC+""===date_arr[2]&&selectB+""===date_arr[1]&&selectA+""===date_arr[0])
            {
              // alert("1")
              arr.push(order[i])
            }
            // }
        }
        // alert(JSON.stringify (arr))
      setThe_choose_date_order(arr)
     }
    },[loading,selectB,selectA,selectC])

   
    // function get_orders(){
       

    // }
  
    return (<>
    {/* {loading? */}
    <View style={{ width:"100%",height:"100%", alignItems: "center" }}>
        <View style={{ width: "95%", height: "100%", backgroundColor: "yellow" }}>
<View style={{width:"100%",flexDirection:"row",justifyContent:"space-between",borderBottomColor:"black",borderBottomWidth:1,paddingVertical:10}}>
<View> 
    <Text style={{textAlign:"center",fontSize:15,fontWeight:"bold"}}>
        السنة
    </Text>
<View   style={{ height: 50, width: 120,borderColor:"red",borderWidth:1 ,borderRadius:10}}>

<Picker
        selectedValue={selectC}
       
        
        onValueChange={(itemValue, itemIndex) =>{ 
            setSelectedC(itemValue)
            // get_orders()
        }}
      >
       { c.map((item, index) => {
            return <Picker.Item value={item} label={item} />
          })
        }
         
        
      </Picker>
</View>
</View>
<View> 
    <Text style={{textAlign:"center",fontSize:15,fontWeight:"bold"}}>
        الشهر
    </Text>
<View   style={{ height: 50, width: 120,borderColor:"red",borderWidth:1 ,borderRadius:10}}>

<Picker
        selectedValue={selectB}
       
        
        onValueChange={(itemValue, itemIndex) => {
            let year=new Date().getFullYear()*1
        
            let daysInMonth = new Date(year,itemValue, 0).getDate();
     
        // alert(itemValue)
         let x=days.slice(0,daysInMonth)
          seta(x)
          setSelectedA(selectA)
        //   alert(selectA)
            setSelectedB(itemValue)
            // get_orders()
        }
        }
      >
       { b.map((item, index) => {
            return <Picker.Item value={item} label={item} />
          })
        }
         
        
      </Picker>
</View>
</View>
<View> 
    <Text style={{textAlign:"center",fontSize:15,fontWeight:"bold"}}>
        اليوم
    </Text>
<View   style={{ height: 50, width: 120,borderColor:"red",borderWidth:1 ,borderRadius:10}}>

<Picker
        selectedValue={selectA}
       
        
        onValueChange={(itemValue, itemIndex) =>{
             setSelectedA(itemValue)
            //  get_orders()
            }}
      >
       { a.map((item, index) => {
            return <Picker.Item value={item} label={item} />
          })
        }
         
        
      </Picker>
</View>



{/* <ScrollView> */}

         
        {/* </ScrollView> */}





</View>


</View>

   
<FlatList data={the_choose_date_order} renderItem={({ item, index }) => (

<View style={{
  width: width * 0.95,
  height: height * 0.22,
  backgroundColor: "#02A8D8",
  marginVertical: 10,
  borderRadius: 20,
  justifyContent: "center",
  paddingHorizontal: 10

}}>
  <Text style={{ fontSize: 18, fontWeight: "bold", color: "#000" }}>رقم الطلب     :  {'\t\t'}
    <Text style={{ fontSize: 15, fontWeight: "bold", color: "#fff" }}> {item.ordered_Items_id}</Text>
  </Text>


  <Text style={{ fontSize: 18, fontWeight: "bold", color: "#000" }}>عدد الوجبات : {'\t\t\t'}
    <Text style={{ fontSize: 15, fontWeight: "bold", color: "#fff" }}> {item.Ordered_Items_meals_num}</Text>
  </Text>


  <Text style={{ fontSize: 18, fontWeight: "bold", color: "#000" }}>السعر الكلي   : {'\t\t'}
    <Text style={{ fontSize: 15, fontWeight: "bold", color: "#fff" }}> {item.ordered_Items_total_price}</Text>
  </Text>


  <Text style={{ fontSize: 18, fontWeight: "bold", color: "#000" }}>تاريخ الطلب : {'\t\t'}
    <Text style={{ fontSize: 15, fontWeight: "bold", color: "#fff" }}> {item.ordered_Items_date}</Text>
  </Text>
  
  <Text style={{ fontSize: 18, fontWeight: "bold", color: "#000" }}>حالة الطلب : {'\t\t'}
    <Text style={{ fontSize: 15, fontWeight: "bold", color: "#fff" }}> {item.ordered_Items_status}</Text>
  </Text>


</View>




)} />
       
 
  

          

          
  

   

</View>
</View>
     {/* :null} */}
      </>)

}
export default ordered_item;