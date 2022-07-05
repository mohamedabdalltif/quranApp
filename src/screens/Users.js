import React, { useEffect, useState } from "react";
import { Text, View, FlatList, TouchableOpacity,StatusBar} from "react-native";


const Users = ({ navigation }) => {
    const [arr_user, setArr_user] = useState(
       
[
    {
      "user_id": "34",
      "user_name": "Mohamed Etman",
      "user_email": "mae25806@gmail.com",
      "user_phone": " 01024598787",
      "user_token": "jfdbgjkfbgkjfbgkjfbgkjfdb",
      "user_join_date": "2021-10-17 23:51:25",
      "user_deleted": "0",
      "user_addresses": [
        {
          "address_id": "190",
          "address_title": "للل",
          "address_description": "من",
          "address_primary": "1",
          "adress_lattuide": "30.836053125148",
          "address_langtuide": "30.863428451121",
          "address_user_id": "34"
        },
        {
          "address_id": "191",
          "address_title": "بب",
          "address_description": "بب",
          "address_primary": "0",
          "adress_lattuide": "30.836053125148",
          "address_langtuide": "30.863428451121",
          "address_user_id": "34"
        },
        {
          "address_id": "192",
          "address_title": "لللد",
          "address_description": "بيطظظ",
          "address_primary": "0",
          "adress_lattuide": "30.836053125148",
          "address_langtuide": "30.863428451121",
          "address_user_id": "34"
        },
        {
          "address_id": "193",
          "address_title": "بببب",
          "address_description": "تتتتتع",
          "address_primary": "0",
          "adress_lattuide": "30.836053125148",
          "address_langtuide": "30.863428451121",
          "address_user_id": "34"
        },
        {
          "address_id": "194",
          "address_title": "بيا",
          "address_description": "منا",
          "address_primary": "0",
          "adress_lattuide": "30.836053125148",
          "address_langtuide": "30.863428451121",
          "address_user_id": "34"
        },
        {
          "address_id": "195",
          "address_title": "للب",
          "address_description": "بب",
          "address_primary": "0",
          "adress_lattuide": "30.836053125148",
          "address_langtuide": "30.863428451121",
          "address_user_id": "34"
        },
        {
          "address_id": "196",
          "address_title": "يي",
          "address_description": "يي",
          "address_primary": "0",
          "adress_lattuide": "30.836053125148",
          "address_langtuide": "30.863428451121",
          "address_user_id": "34"
        },
        {
          "address_id": "197",
          "address_title": "احمد ",
          "address_description": "احمد",
          "address_primary": "0",
          "adress_lattuide": "30.836053125148",
          "address_langtuide": "30.863428451121",
          "address_user_id": "34"
        },
        {
          "address_id": "198",
          "address_title": "اللب",
          "address_description": "الد",
          "address_primary": "0",
          "adress_lattuide": "30.836053125148",
          "address_langtuide": "30.863428451121",
          "address_user_id": "34"
        }
      ],
      "user_numOf_order": 6
    },
    {
      "user_id": "35",
      "user_name": "Mo",
      "user_email": "Hovho@gmail.com",
      "user_phone": "01024963291",
      "user_token": "cVU1cKSrQTeoe6zR9LMRhE:APA91bGyH6hYyXAeQXt579D0Xau8gqUjQlrQhr5rB1g9ot5L3JxNcVbCCvZgF1knpLqdq67GSKBZPyDZ1RGqwHe3xAoRRGU-QX6LAT_5Y3htA-NcCIakVFQlzqE1jZohfWGf4h_jFgOR",
      "user_join_date": "2021-10-18 13:36:38",
      "user_deleted": "0",
      "user_addresses": [
        
      ],
      "user_numOf_order": 0
    },
    {
      "user_id": "36",
      "user_name": "zxc",
      "user_email": "zxc@zc.com",
      "user_phone": "01234560789",
      "user_token": "ewdOc9KZSeGdD1hTO7SCoC:APA91bHw89aN6onmcshXMyDArPwModV19HI_g7CMxLczy8RUlUJwsFnKxjjY7niqS9wKlh4Pgli6jHRCqdbZxM8ke7l7OQ-30QWrFvKH-vABwK-k1TpGnfewDx2ohl-R8hjPs4Wu4VkY",
      "user_join_date": "2021-10-21 23:24:36",
      "user_deleted": "0",
      "user_addresses": [
        
      ],
      "user_numOf_order": 0
    },
    {
      "user_id": "37",
      "user_name": "Ahmed Mezzo",
      "user_email": "ahmedmezzo419@gmail.com",
      "user_phone": " 01024598787",
      "user_token": "jfdbgjkfbgkjfbgkjfbgkjfdb",
      "user_join_date": "2021-10-22 23:52:43",
      "user_deleted": "0",
      "user_addresses": [
        
      ],
      "user_numOf_order": 0
    },
    {
      "user_id": "38",
      "user_name": "Wasd Wasd",
      "user_email": "wasdwasd094@gmail.com",
      "user_phone": " 01024598787",
      "user_token": "jfdbgjkfbgkjfbgkjfbgkjfdb",
      "user_join_date": "2021-10-23 00:49:33",
      "user_deleted": "0",
      "user_addresses": [
        
      ],
      "user_numOf_order": 0
    },
    {
      "user_id": "39",
      "user_name": "Mo",
      "user_email": "Hoho@gmail.com",
      "user_phone": "01024963291",
      "user_token": "d-yKYlWgREqjDkaIZ3iM6Q:APA91bETqSNpP42Qv0gW7KNR4P18t8O9sFmHQ2ZroEnJd_6_IqIqdfdl8SpG3h-PRHxOpIf_Y-IZoACXH5r1HMJlfBIrDg6g2weU1_2b1W5vPnyhA8zp1tJzME-0CEdDyDjk5tN-xnXi",
      "user_join_date": "2021-11-06 20:43:45",
      "user_deleted": "0",
      "user_addresses": [
        {
          "address_id": "199",
          "address_title": "ابيار",
          "address_description": "ابيار ",
          "address_primary": "0",
          "adress_lattuide": "30.836359141806",
          "address_langtuide": "30.864293463528",
          "address_user_id": "39"
        }
      ],
      "user_numOf_order": 0
    },
    {
      "user_id": "40",
      "user_name": "Ali",
      "user_email": "Ali@gmail.com",
      "user_phone": "01258369690",
      "user_token": "foqo44PMT92v-JW3UUPd7T:APA91bHq6XbtSegxF0Pfsu_DrkE9L3pzCo-j1bNuhkYaZMGpomDBX9BefjORjnK1Lt5XiMdomMfZIN95GNPUWb6_ITkzwXcsUNyuZ12_1nLawPKvEERWI54HwBpmjVOUvX-m7e7Rj3ur",
      "user_join_date": "2021-11-07 22:46:41",
      "user_deleted": "0",
      "user_addresses": [
        {
          "address_id": "206",
          "address_title": "لانت",
          "address_description": "ابتن",
          "address_primary": "0",
          "adress_lattuide": "30.7883336",
          "address_langtuide": "30.9985019",
          "address_user_id": "40"
        },
        {
          "address_id": "207",
          "address_title": "لاعع",
          "address_description": "٥ففف",
          "address_primary": "0",
          "adress_lattuide": "30.7883336",
          "address_langtuide": "30.9985019",
          "address_user_id": "40"
        }
      ],
      "user_numOf_order": 5
    },
    {
      "user_id": "41",
      "user_name": "Mohamed",
      "user_email": "Mohamed12@gmail.com",
      "user_phone": "01024963291",
      "user_token": "d-yKYlWgREqjDkaIZ3iM6Q:APA91bETqSNpP42Qv0gW7KNR4P18t8O9sFmHQ2ZroEnJd_6_IqIqdfdl8SpG3h-PRHxOpIf_Y-IZoACXH5r1HMJlfBIrDg6g2weU1_2b1W5vPnyhA8zp1tJzME-0CEdDyDjk5tN-xnXi",
      "user_join_date": "2021-11-09 20:45:21",
      "user_deleted": "0",
      "user_addresses": [
        {
          "address_id": "200",
          "address_title": "Tanta",
          "address_description": "Tanta",
          "address_primary": "0",
          "adress_lattuide": "30.7883336",
          "address_langtuide": "30.9985019",
          "address_user_id": "41"
        },
        {
          "address_id": "201",
          "address_title": "Ebial",
          "address_description": "Fsxjj",
          "address_primary": "0",
          "adress_lattuide": "30.7883336",
          "address_langtuide": "30.9985019",
          "address_user_id": "41"
        },
        {
          "address_id": "202",
          "address_title": "Gcx",
          "address_description": "Ffc",
          "address_primary": "0",
          "adress_lattuide": "30.7883336",
          "address_langtuide": "30.9985019",
          "address_user_id": "41"
        }
      ],
      "user_numOf_order": 0
    },
    {
      "user_id": "42",
      "user_name": "Mokgdx",
      "user_email": "Hjhj@gmail.com",
      "user_phone": "01024963291",
      "user_token": "et7ZnGj3RFi_4x-8sgFJTJ:APA91bFnecZihJ1PXO1r2mWLhW3lFPtWVCwdq4HowC2qIp86VKX9HQA4hPfgfiPm8qhRXAsRG_qUzf3HfbY83EVtWfvNG_ZN1ji5yjGlM2FRmQOnKvK3HcI52w71q2W1fdsNn5V2V8MD",
      "user_join_date": "2021-11-09 20:54:07",
      "user_deleted": "0",
      "user_addresses": [
        {
          "address_id": "203",
          "address_title": "Tanta",
          "address_description": "Tanta",
          "address_primary": "0",
          "adress_lattuide": "30.7883336",
          "address_langtuide": "30.9985019",
          "address_user_id": "42"
        }
      ],
      "user_numOf_order": 0
    },
    {
      "user_id": "43",
      "user_name": "ziad",
      "user_email": "zoz@gmail.com",
      "user_phone": "01236547890",
      "user_token": "f9N4gwcJTbOyZLes9AMuuW:APA91bG2t7RszSNeEOQ94n4DDjzl0Y_-rN2MeLpVcVX-x1_Vwcq-2AMBHU1adfvC5bsrL8M99I4DqmH_8RVVDG10dwWKkKk5XmgQeSoa9mmERU1UTEKn1McA4lYWe8gPs97H46QlRil8",
      "user_join_date": "2021-11-11 22:03:37",
      "user_deleted": "0",
      "user_addresses": [
        {
          "address_id": "204",
          "address_title": "zxc",
          "address_description": "cxz",
          "address_primary": "0",
          "adress_lattuide": "37.421998333333",
          "address_langtuide": "-122.084",
          "address_user_id": "43"
        },
        {
          "address_id": "205",
          "address_title": "hvhv",
          "address_description": "jmjv",
          "address_primary": "0",
          "adress_lattuide": "37.421998333333",
          "address_langtuide": "-122.084",
          "address_user_id": "43"
        }
      ],
      "user_numOf_order": 1
    },
    {
      "user_id": "44",
      "user_name": "Mo",
      "user_email": "Mm@f.com",
      "user_phone": "01024963291",
      "user_token": "eDzc4tfySzCP05F4-dF5Ge:APA91bGhwYuGH-0X2dBDP06FFNxYtKmArftjqzvdbilMpn8RCsW9uZ86NGpRy2FlvSE6VdoDFQBtQbOvqMF4dW6EQLkQWFKXLCYbvO7qNtZ20Mh_bUO8RBdg7xdIl9efRg5LxuAK9Wk9",
      "user_join_date": "2021-12-13 14:01:01",
      "user_deleted": "0",
      "user_addresses": [
        {
          "address_id": "208",
          "address_title": "Tff",
          "address_description": "Ffff",
          "address_primary": "0",
          "adress_lattuide": "30.825931812738",
          "address_langtuide": "30.997069016457",
          "address_user_id": "44"
        }
      ],
      "user_numOf_order": 0
    }
  ]
    )

   

    return (
        <>
        

            <View style={{ flex: 1, alignItems: "center" }}>
                <View style={{ width: "95%", height: "100%", backgroundColor: "yellow" }}>
                <StatusBar
                        backgroundColor="#f4511e"
                        // barStyle={"dark-content"}
                        translucent={true}
                    

                    />

                {/* {Render_users()} */}

                <FlatList
            data={arr_user}
            keyExtractor={u => `${u.user_id}`}
            renderItem={({ item, index }) => {

                return (

                    <>

                        <TouchableOpacity
                        onPress={()=>{
                           
                            navigation.navigate('Details',{user_obj:item,title:item.user_name})
                        }}
                         style={{ width: "100%", height: 100, backgroundColor: "green", flexDirection: "row",marginBottom:10 }}>



                            <View style={{ width: "30%", height: "100%", backgroundColor: "red" }}>

                            </View>

                            <View style={{ width: "70%", height: "100%", paddingLeft: "1%", justifyContent: "center", }}>


                                <Text>
                                    {item.user_name}
                                </Text>



                                <Text>
                                    id : {item.user_id}
                                </Text>


                                <Text>
                                    num_of_order : {item.user_numOf_order}
                                </Text>




                            </View>

                        </TouchableOpacity>

                    </>



                )
            }}
        />
                   
                </View>

            </View>

        </>
    )

}
export default Users;