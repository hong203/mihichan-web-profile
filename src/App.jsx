import { useState } from 'react'
import './App.css'

const App = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const [currentTab, setCurrentTab] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState('')
  const [isGalleryModal, setIsGalleryModal] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [galleryTouchStart, setGalleryTouchStart] = useState(0)
  const [galleryTouchEnd, setGalleryTouchEnd] = useState(0)

  const minSwipeDistance = 50

  const handleTouchStart = (e) => {
    setTouchEnd(0)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    if (isLeftSwipe) nextImage()
    if (isRightSwipe) prevImage()
  }

  const handleGalleryTouchStart = (e) => {
    setGalleryTouchEnd(0)
    setGalleryTouchStart(e.targetTouches[0].clientX)
  }

  const handleGalleryTouchMove = (e) => setGalleryTouchEnd(e.targetTouches[0].clientX)

  const handleGalleryTouchEnd = () => {
    if (!galleryTouchStart || !galleryTouchEnd) return
    const distance = galleryTouchStart - galleryTouchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    if (isLeftSwipe) nextImage()
    if (isRightSwipe) prevImage()
  }

  window.openLarge = (img) => {
    setIsGalleryModal(true)
    setModalContent(`<img src="${img}" alt="Large Sample" style="max-width: 90%; max-height: 80vh; display: block; margin: 0 auto;" />`)
    setShowModal(true)
  }

  const sampleImages = [
    '/images/Messenger_creation_2182361892292925.webp',
    '/images/Messenger_creation_756844766847047.webp',
    '/images/received_1117452703657446.webp',
    '/images/received_1175087241017516.webp',
    '/images/received_1236150855045834.webp',
    '/images/received_1311826354045520.webp',
    '/images/received_1368443194344526.webp',
    '/images/received_1384825243370872.webp',
    '/images/received_1393896148809879.webp',
    '/images/received_1394072818797196.webp',
    '/images/received_1412281827057662.webp',
    '/images/received_1416997689810660.webp',
    '/images/received_1449657256723766.webp',
    '/images/received_1562638098389272.webp',
    '/images/received_1570674027701435.webp',
    '/images/received_1701172437935441.webp',
    '/images/received_2161330058030449.webp',
    '/images/received_25243662968662600.webp',
    '/images/received_3203525419806902.webp',
    '/images/received_744932198650957.webp',
    '/images/received_854452750556527.webp',
    '/images/received_919209520529917.webp'
  ]

  const images = sampleImages

  const tabs = [
    { name: 'Thực đơn', content: 'menu' },
    { name: 'Điều khoản dịch vụ', content: 'terms' },
    { name: 'Sample', content: 'samples' }
  ]

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  const nextTab = () => {
    setCurrentTab((prev) => (prev + 1) % tabs.length)
  }

  const prevTab = () => {
    setCurrentTab((prev) => (prev - 1 + tabs.length) % tabs.length)
  }

  const openModal = (content) => {
    setIsGalleryModal(false)
    if (content === 'menu') {
      setModalContent(`
        <h2>Thực đơn</h2>
        <p>Đây là giá GỐC, chưa tính thêm details, tiền dt sẽ được tính theo độ phức tạp của brief ( trừ những loại splash art, drip marketing hsr gi, tcg đã tính đầy đủ giá không thu thêm phụ phí. )</p>
        <h3>Honkai Star Rail commission</h3>
        <table>
          <thead>
            <tr>
              <th>Loại</th>
              <th>Giá</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Splash art / Drip marketing</td><td>char: 1tr2 → 1tr5, bg 200 → 700</td></tr>
            <tr><td>Tranh ngày lễ</td><td>400</td></tr>
            <tr><td>Tinh hồn</td><td>2: 150k, 13456: 200k</td></tr>
            <tr><td>Bé trai, bé gái</td><td>1tr2</td></tr>
            <tr><td>Illust</td><td>chest 300, half 450, thigh 900, full body 1tr2 → 1tr5</td></tr>
            <tr><td>PV</td><td>950 → 1tr1</td></tr>
            <tr><td>Design</td><td>mặt trước/ mặt sau: 300/ 1 mặt, mặt bên 200/ 1 mặt</td></tr>
          </tbody>
        </table>
        <h3>Genshin Impact commission</h3>
        <table>
          <thead>
            <tr>
              <th>Loại</th>
              <th>Giá</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Drip marketing</td><td>1tr2 → 1tr5</td></tr>
            <tr><td>Splash art</td><td>char: 1tr2 → 1tr5, bg: 200 → 500</td></tr>
            <tr><td>Tranh sinh nhật</td><td>mặc định halfbody + full bg 650</td></tr>
            <tr><td>Đĩa nhạc</td><td>250-350</td></tr>
            <tr><td>TCG</td><td>char: 900, details 100 - 300</td></tr>
            <tr><td>Ảnh thẻ</td><td>250</td></tr>
            <tr><td>PV</td><td>950 → 1tr1</td></tr>
            <tr><td>Design</td><td>mặt trước/ mặt sau: 300/ 1 mặt, mặt bên: 200/ 1 mặt</td></tr>
            <tr><td>Tranh lễ</td><td>650</td></tr>
            <tr><td>Illust</td><td>chest 300, half 450, thigh 900, full body 1tr2 → 1tr5</td></tr>
          </tbody>
        </table>
        <h4>Phụ phí details</h4>
        <p>Details char: 20 - 100</p>
        <p>Details bg: 50 - 400</p>
        <p>Phí private: 70%</p>
        <p>Phí thương mại x 5</p>
      `)
    } else if (content === 'terms') {
      setModalContent(`
        <h2>Điều khoản dịch vụ</h2>
        <h3>Về giao dịch</h3>
        <ul>
          <li>Trong giao dịch, page sẽ rep tin nhắn trong thời gian sớm và nhanh nhất trong khả năng.</li>
          <li>Khách lần đầu đặt vui lòng show bài check legit hoặc lịch sử giao dịch cho page check trước khi giao dịch.</li>
          <li>Người giao dịch với khách là staff không phải artist, xin hãy rõ ràng trong khi giao dịch để tránh khó xử.</li>
          <li>Không hài lòng về tranh có vấn đề không ưng ý hãy feedback sớm cho bên staff để liên lạc với artist để sửa hoàn thiện cho các bạn. Không chịu trách nhiệm thêm về commission của bạn sau khi đã hoàn tất giao dịch</li>
          <li>Không nhận chuyển khoản trước kể cả cọc, thanh toán 100% sau khi hoàn thiện com. Thanh toán trong vòng 2 ngày sau khi hoàn thiện, nếu có việc gấp, lí do chính đáng sẽ được gia hạn tối đa 5 ngày để hoàn thành chuyển khoản. Sau 1 tuần không chuyển khoản full sẽ được đưa vào blacklist cấm giao dịch.</li>
          <li>Gift sẽ được tặng ngẫu nhiên, hỗ trợ des tính 30% giá com des hoàn chỉnh.</li>
          <li>Deadline theo khách đặt, có nhận deadline gấp nhưng hạn chế số lượng, để artist có thể hoàn thiện com được tốt nhất có thể.</li>
          <li>Mỗi lần mở 2 slot, pick slot random và brief phù hợp với khả năng của hoạ sĩ. Hoàn thiện xong sẽ mở đợt mới ( không có thời gian cụ thể hay báo trước ). Comment vào bài nhận com để lấy slot.</li>
          <li>Bên mình huỷ com bất chợt sẽ có bồi thường gift nhỏ cho khách.</li>
          <li>Artist có quyền từ chối giao dịch commission, sẽ có list riêng những người cấm giao dịch.</li>
          <li>Không reup, feed tranh commission cho AI, ăn cắp chất xám, heavy ref, trace tranh,..</li>
          <li>Sẽ được đổi loại commission trong khả năng artist cho phép.</li>
          <li>Không cho đổi brief đột xuất, nếu đã chốt rồi không được đổi.</li>
        </ul>
        <h3>Về Commission</h3>
        <ul>
          <li>Quá trình update comm: sketch -> final</li>
          <li>Free sửa 5 lần, những lần sửa sau + 10k</li>
          <li>Phí edit free.</li>
          <li>Khi update commission, bên mình sẽ giảm chất lượng hd, kí hoặc gắn wtm để khách check tranh, sau khi hoàn thành thanh toán sẽ giao file hd.</li>
          <li>Brief cần có yêu cầu như sau: + Nhân vật: reference, tính cách, biểu cảm mong muốn. + Pose, ref background, tone màu mong muốn, hướng sáng, vibe tranh. + Phải có hình ảnh minh hoạ rõ ràng, có thể phác người que nhà cửa một mẩu miễn là nhìn được. + Để trong link gg docs, notion, file riêng, etc để không bị trôi lạc mất idea.</li>
        </ul>
        <h3>Lưu ý</h3>
        <p>Không nhận char không có design, không hỗ trợ idea commission.</p>
        <h3>Về Credit và giới thiệu</h3>
        <ul>
          <li>Credit tên page, không được thiếu cre.</li>
          <li>Giới thiệu page cho khách khác phải có sự cho phép của page, giới thiệu với ai phải cho page check qua trước.</li>
          <li>Vì là liên lạc trung gian qua staff nên vui lòng không tra hỏi thông tin đời tư của hoạ sĩ.</li>
        </ul>
      `)
    } else if (content === 'samples') {
      setModalContent(`
        <h2>Samples</h2>
        <div class="sample-grid">
          ${sampleImages.map(img => `<img src="${img}" alt="Sample" class="sample-thumb" onclick="window.openLarge('${img}')" />`).join('')}
        </div>
      `)
    }
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <div className="app">
      <header className="header">
        <h1>ִִ ࣪✶⋆.˚tiệm gà rán mihi chan ˖°𓇼 🌊 🐚 🫧</h1>
        <p>Commission: Closed.</p>
      </header>
      <div className="carousel-section">
        <h3>Menu & Info</h3>
        <div className="carousel">
          <button onClick={prevTab}>&lt;</button>
          <div className="tab-item" onClick={() => openModal(tabs[currentTab].content)}>
            {tabs[currentTab].name}
          </div>
          <button onClick={nextTab}>&gt;</button>
        </div>
      </div>

      <div className="profile-section">
        <div className="avatar">
          <img src="/images/imageavata.png" alt="Mihi Chan Avatar" />
        </div>
        <div className="info">
          <p>Chào mừng quý khách đến với tiệm gà rán của mihi chan, rất hân hạnh được phục vụ các bạn ʕ ᵔᴥᵔ ʔ !</p>
          <p>Hãy để tiệm gà của mihi chan phác họa nên những gam màu rực rỡ cho nhân vật của riêng bạn.</p>
          <p>Theo dõi page Facebook của chúng tôi: <a href="https://www.facebook.com/profile.php?id=61585840063897&locale=vi_VN" target="_blank" rel="noopener noreferrer">Mihi Chan</a></p>
        </div>
      </div>
      
      <div className="gallery-section featured">
        <h3>Samples</h3>
        <div className="gallery" onTouchStart={handleGalleryTouchStart} onTouchMove={handleGalleryTouchMove} onTouchEnd={handleGalleryTouchEnd}>
          <button onClick={prevImage}>&lt;</button>
          <img src={images[currentImage]} alt={`Sample ${currentImage + 1}`} className="gallery-image" />
          <button onClick={nextImage}>&gt;</button>
        </div>
      </div>

      {showModal && (
        <div className="modal" onClick={closeModal} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
          {isGalleryModal && <button className="prev" onClick={(e) => { e.stopPropagation(); prevImage(); }}>&lt;</button>}
          {isGalleryModal && <button className="next" onClick={(e) => { e.stopPropagation(); nextImage(); }}>&gt;</button>}
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <div dangerouslySetInnerHTML={{ __html: modalContent }} />
          </div>
        </div>
      )}
    </div>
  )
}

export default App

