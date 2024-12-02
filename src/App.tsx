import './App.css';
import {
  Button,
  Dialog,
  DialogActions,
  DialogBody,
  DialogContent,
  DialogSurface,
  DialogTrigger,
  Input,
} from '@fluentui/react-components';
function App() {
  return (
    <>
      <TestDialog />
    </>
  );
}

export default App;

const TestDialog = () => {
  return (
    <Dialog>
      <DialogTrigger disableButtonEnhancement>
        <Button appearance="primary">Test me</Button>
      </DialogTrigger>
      <DialogSurface>
        <DialogBody>
          <DialogContent
            style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
          >
            <Input />
            <Input />
            <Input />
            <Input />
            <Input />
            <Input />
            <Input />
            <Input />
            <Input />
          </DialogContent>
          <DialogActions>
            <DialogTrigger>
              <Button appearance="primary">Close</Button>
            </DialogTrigger>
            <DialogTrigger>
              <Button appearance="secondary">Close</Button>
            </DialogTrigger>
            <DialogTrigger>
              <Button appearance="subtle">Close</Button>
            </DialogTrigger>
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
};
