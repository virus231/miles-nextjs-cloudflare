import PageScroller from 'react-page-scroller';

export default function App() {
  return (
    <PageScroller>
      <div style={{ height: '100%', backgroundColor: 'red' }}></div>
      <div style={{ height: '100%', backgroundColor: 'green' }}></div>
      <div
        style={{ height: '200%', backgroundColor: 'blue', overflow: 'scroll' }}
      ></div>
    </PageScroller>
  );
}
