import React, { useContext, useEffect, useState } from "react";
import { Messages } from "./Messages";
import { Input } from "./Input";
import { ChatContext } from "../context/ChatContext";

export const Chat = () => {
  const data = useContext(ChatContext);
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    if (data.data.chatId !== "null") {
      setShowChat(true);
    } else {
      setShowChat(false);
    }
  }, [data.data.chatId]);

  if (!showChat) {
    return (
      <div className="chat">
        <div
          className="chatInfo"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "80%",
            background: "#171f26",
          }}
        >
          <span>Please select a chat to start a conversation</span>
        </div>
      </div>
    );
  }

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.data.user?.name}</span>
        <div className="icons">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAOpJREFUSEvtlssNwkAMRCeVAJ3QCVAJUAlQSegEqAQ0UYwsi420cWRzWB8j2W89/qVDknVJXDRwmPJ/JfUFwNqR+h3ADcBzKobN+O0AWtfNFFyDjwBOozdfPde2o+MBwLUUpAT21F5UYxJnBd4DWMm3KDD7huDvYyLAPQCRPwTM+nI6BErVQ8C/+qqBB1X0HC8xTmlSs7nYWHr9htRYIOHjpDdXygKRWrOHXrK/dRNxpfFltCWOhN3VjMt6D+fSdu/DeYslOwbnWSyaBbMLd044obxKVT8Cc29wtZ9nUVTDtEMDu+SrcU6T+gPUREIfpLD2HgAAAABJRU5ErkJggg=="
            alt="icon"
          />
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAZ1JREFUSEvlltFNAzEQRCedQCVAJUAlQCVAJUAl0AnooZtos1n7LpZRPrAUXWI5ft6d2fXtdKaxOxNXW8APkj4kvc885Br4TdK1pC9JL5KeZsF7YEPNmgpvgSMU4MVCnwavwM+S7hYQut4sv5lnTIFX4O8Edao5TISjN7oPjQzGSKSZQaTZyRl+OUSVjsoJLT+Xze6LiKL2RMuaoZEjjuDHVD6V9kNQ/lRp7KhsLG9u7THXcIq9WQWmUxFtBsRm8ifgaLCoc2t+KN1VxOiMnm6Vji7P43qyMjRanSuWTSyrXE4V3Ifu9vYWOLo7a20PVF0st9omvHdJRECsWQ51uxjQaXbK3dPjfAlfuxZj7ea6Ju0cLsMow9fUXo/ga2A2JX08q8uBeUx4tTyBuptlPxzA18CkLOrN7xx5z9UZzqF++/8WsOGO3Kbab7JST9Fw+76wFWx4Zape2UToQQs+BezAotuje/EAH14MebIO/Rm5729Odc6mSwoNs6vz2iPoKRq3ZIyu9ve4tmnEkVT3vOToeXbfw2eDN18Y/w/8A9imch83YDBkAAAAAElFTkSuQmCC"
            alt="icon"
          />
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAAGRJREFUSEvtlsENACAIA2EzNzNu5mb64iPh11gT6wC9eFbRjbScxDWBr5mX6lDdwc7HmVepXmBw4jwHBm84x6nV4aSBXU+1uioXTTX4iHWdrPyB/PdW08aiWg03oLEIV1oF0lRvdq8KH2IyMOgAAAAASUVORK5CYII="
            alt="icon"
          />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};
