import Header from '../../core/components/Header';
import SidebarTwoCols from './SidebarTwoCols';

import data from '../../config/CVData';

const CertificatesContainer = () => (
  <>
    <Header>Certificates </Header>
    {data.certificates.map((c) => (
      <SidebarTwoCols data={c} key={c.name} />
    ))}
  </>
);

export default CertificatesContainer;
