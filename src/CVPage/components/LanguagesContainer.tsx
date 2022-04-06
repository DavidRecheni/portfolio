import Header from '../../core/components/Header';
import SidebarTwoCols from './SidebarTwoCols';
import data from '../CVData';

const LanguagesContainer = () => (
  <>
    <Header>Languages</Header>
    {data.languages.map((l) => <SidebarTwoCols data={l} />)}
  </>
);

export default LanguagesContainer;
