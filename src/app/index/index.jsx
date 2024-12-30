import { Button } from '@nextui-org/react';
import Input from '@/components/Form/Input';

function Index() {
  return (
    <div className="p-8">
      <h1 className="text-4xl text-center py-32 text-primary">Hello سلام!</h1>
      <Button color="primary" className="mb-4">
        اینجا کلیک کن
      </Button>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-6">
          <Input label="شماره تلفن" />
        </div>
        <div className="col-span-6">
          <Input label="کد ملی" />
        </div>
      </div>
    </div>
  );
}

export default Index;
