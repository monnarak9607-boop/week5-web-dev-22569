const posts = [
  { id: 1, title: 'เริ่มต้นเรียน React', author: 'สมชาย', category: 'React', likes: 12 },
  { id: 2, title: 'รู้จัก Tailwind CSS', author: 'สมหญิง', category: 'CSS', likes: 8 },
  { id: 3, title: 'JavaScript ES6+ ที่ควรรู้', author: 'สมชาย', category: 'JavaScript', likes: 25 },
  { id: 4, title: 'สร้าง REST API ด้วย Express', author: 'มานะ', category: 'Backend', likes: 15 },
];

const getSumary = (post) => `${post.title} โดย ${post.author}`;
console.log(getSumary(posts[0]));

const { title, likes } = posts[0];
console.log(title, likes);

const newPosts = [...posts, { id: 5, title: 'Deploy เว็บไซต์', author: 'มานะ', category: 'Backend', likes: 0 }];
const updatedPosts = posts.map(p => (p.id === 2 ? { ...p, likes: 9 } : p));