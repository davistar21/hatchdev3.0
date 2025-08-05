import { createRoot } from 'react-dom/client'
import ProfileCard from './assignment-1';
import './styles/assignment-1.css'

const root = createRoot(document.querySelector("#root"));

root.render(
  <div>
    <ProfileCard />
  </div>
)
