import { useStore } from "@/hooks/useStore";
import Image from "next/image";

const Avatar = () => {
  const {profileData} = useStore();
  console.log('hit profileData', profileData);
  return <Image style={{
    height: "100px",
    width: "100px",
    borderRadius: "50%",
    border: 'solid',
    borderWidth: '2px',
    borderColor: 'gray'
  }} src={decodeURIComponent(profileData.avatar)} alt={profileData.handle} width={100} height={100} />
}

export default Avatar;