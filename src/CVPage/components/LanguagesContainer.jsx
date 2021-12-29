import Header from '../../core/components/Header';
import SidebarTwoCols from './SidebarTwoCols';

const languages = [{
  name: 'Spanish',
  details: 'Native',
},
{
  name: 'English',
  details: 'Fluent',
},
{
  name: 'German',
  details: 'Basic',
}];

export default function LanguagesContainer() {
  return (
    <>
      <Header>Languages</Header>
      {languages.map((l) => <SidebarTwoCols data={l} />)}
    </>
  );
}
