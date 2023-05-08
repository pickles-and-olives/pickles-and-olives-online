import DefaultLayout from '../components/DefaultLayout';
import { MemeGenerator } from '../components/MemeGenerator';

export default function MemeGeneratorPage() {
  return (
    <>
      <DefaultLayout colour={'#7FA97A'}>
        <MemeGenerator />
      </DefaultLayout>
    </>
  );
}
