import Rive from 'rive-react-native';

export default function RiveComponent({resourceName, styleProp}) {
  return <Rive resourceName={resourceName} style={styleProp} />;
  // return (
  //   <Rive fit={Fit.Cover} resourceName={resourceName} style={styleProp} />
  // );
}
