import "./App.css";
import {
  Button,
  Dialog,
  DialogActions,
  DialogBody,
  DialogContent,
  DialogSurface,
  DialogTitle,
  DialogTrigger,
  Input,
  Textarea,
} from "@fluentui/react-components";
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
        <DialogTitle>Test</DialogTitle>
        <DialogBody>
          <DialogContent>
            <Input />
            <Input />
            <Input />
            <Input />
            <Input />
            <Input />
            <Input />
            <Input />
            <Input />
            <Input />
            <Input />
            <Input />
            <Input />
            <Input />
            <Input />
            <Textarea />
            <Textarea />
            <Textarea />
            <Textarea />
            <Textarea />
            <Textarea />
            <Textarea />
            <Textarea />
            <Textarea />
            <Textarea />
            <Textarea />
            <Textarea />
            <Textarea />
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
