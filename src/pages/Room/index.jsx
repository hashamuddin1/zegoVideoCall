import React from 'react'
import { useParams } from 'react-router-dom'; // to get param value
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const RoomPage=()=>{
    const {roomId}=useParams();

    const myMeeting=async(element)=>{
        const appId=1626885383
        const serverSecret='61bd6517367bdfd876349c71fff2e196'
        // date.now ki jagah ham userId dete hay but abhi qk nhi hay tw ye dedia
        const kitToken=ZegoUIKitPrebuilt.generateKitTokenForTest(appId,serverSecret,roomId,Date.now().toString(),'Hasham Uddin')
        const zc=ZegoUIKitPrebuilt.create(kitToken)
        zc.joinRoom({
            container:element,
            sharedLinks:[
                {
                    name:'Copy link',
                    url:`http://localhost:3000/room/${roomId}`
                }
            ],
            scenario:{
                mode:ZegoUIKitPrebuilt.OneONoneCall
            },
            showScreenSharingButton:false
        })
    }

    return (
        <div>
            <div ref={myMeeting}/>
        </div>
    )
}

export default RoomPage;