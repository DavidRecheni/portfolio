import Header from '../../core/components/Header';
import SidebarTwoCols from './SidebarTwoCols';

import data from '../CVData';

const CertificatesContainer = () => (
  <>
    <Header>Certificates </Header>
    {data.certificates.map((c) => (
      <SidebarTwoCols data={c} key={c.name} />
    ))}
  </>
);

export default CertificatesContainer;
