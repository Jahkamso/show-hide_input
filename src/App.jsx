import { MdLock } from "react-icons/md";
import { TbEyeClosed  } from "react-icons/tb";
import { VscEye } from "react-icons/vsc";
import './App.css'
import { useState } from "react";

function App() {
  const [showPassword, setShowPassword] = useState(false)

  const handlePasswordStatus = () => {
    setShowPassword(prev => !prev)
  }

  return (
    <>
    <div style={{background: showPassword && "white"}} className='input-container'>
      <MdLock style={{color: showPassword && "black"}} className="lock" />
      <input type={showPassword ? "text" : "password"} placeholder='secret code?' />
      <div onClick={handlePasswordStatus} className="eye-closed">
        {
          showPassword ? (
            <VscEye />
            ) : (
              <TbEyeClosed />
          )
        }
      </div>
    </div>
      </>
  )
}

export default App