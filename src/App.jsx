import { useState } from 'react'
import './App.css'

const App = () => {
  const [currentPage, setCurrentPage] = useState('intro')
  const [zoomedImage, setZoomedImage] = useState(null)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [showSOS, setShowSOS] = useState(false)

  const handlePageChange = (page) => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentPage(page)
      setIsTransitioning(false)
    }, 150)
  }

  const sampleCategories = {
    'Commission design': [
      '/images/received_1570674027701435.webp',
      '/images/received_2161330058030449.webp',
      '/images/Messenger_creation_2182361892292925.webp',
      '/images/received_854452750556527.webp',
      '/images/received_1175087241017516.webp',
      '/images/received_1368443194344526.webp',
      '/images/received_1384825243370872.webp',
      '/images/received_1394072818797196.webp'
    ],
    'Drip marketing genshin': [
      '/images/Messenger_creation_756844766847047.webp',
      '/images/received_1393896148809879.webp',
      '/images/received_1416997689810660.webp',
      '/images/received_1449657256723766.webp',
      '/images/received_1562638098389272.webp'
    ],
    'Drip marketing honkai': [
      '/images/received_744932198650957.webp',
      '/images/received_919209520529917.webp'
    ],
    'Commissions sinh nhật': [
      '/images/received_1117452703657446.webp',
      '/images/received_1311826354045520.webp'
    ],
    'Commission PV': [
      '/images/received_1412281827057662.webp'
    ],
    'Commission tranh lễ': [
      '/images/received_1236150855045834.webp',
      '/images/received_3203525419806902.webp'
    ]
  }

  const nextTab = () => {
    setCurrentTab((prev) => (prev + 1) % 3)
  }

  const prevTab = () => {
    setCurrentTab((prev) => (prev - 1 + 3) % 3)
  }

  return (
    <div className="app">
      <div className="frame">
        {currentPage === 'intro' && (
          <div className="intro-container">
            <div className={`intro ${showSOS ? 'blurred' : ''}`}>
              <h1>ִִ ࣪✶⋆.˚Tiệm gà rán mihi chan˖°𓇼</h1>
              <p>Commission: Closed.</p>
              <div className="avatar">
                <img 
                  src="/images/imageavata.png" 
                  alt="Mihi Chan Avatar" 
                  onClick={() => setShowSOS(!showSOS)}
                  style={{ cursor: 'pointer' }}
                />
              </div>
              <div className="intro-text">
                <p>Chào mừng quý khách đến với tiệm gà rán của mihi chan, rất hân hạnh được phục vụ các bạn ʕ ᵔᴥᵔ ʔ !</p>
                <p>Hãy để tiệm gà của mihi chan phác họa nên những gam màu rực rỡ cho nhân vật của riêng bạn.</p>
                <p>Liên hệ với page qua <a href="https://www.facebook.com/profile.php?id=61585840063897" target="_blank" rel="noopener noreferrer">mihichan</a></p>
              </div>
            </div>
            {showSOS && (
              <div className="sos-overlay-intro" onClick={() => setShowSOS(false)}>
                <div className="sos-modal-intro" onClick={(e) => e.stopPropagation()}>
                  <p className="sos-text">
                    Mihi chan đang bị staff giam gửi tín hiệu SOS tới bạn<br/>
                    Xin hãy giải cứu mihi chan khỏi bàn tay ác quỷ tại:<br/>
                    ———<br/>
                    <a href="https://www.facebook.com/profile.php?id=61585840063897" target="_blank" rel="noopener noreferrer">mihichan</a>
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
        {currentPage === 'menu' && (
          <div className={`content-section ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
            <button className="home-btn" onClick={() => handlePageChange('intro')}>✕</button>
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
                <tr><td>Splash art / Drip marketing</td><td>char: 1tr2 - 1tr5, bg 200 - 700</td></tr>
                <tr><td>Tranh ngày lễ</td><td>400</td></tr>
                <tr><td>Tinh hồn</td><td>2: 150k, 13456: 200k</td></tr>
                <tr><td>Bé trai, bé gái</td><td>1tr2</td></tr>
                <tr><td>Illust</td><td>chest 300, half 450, thigh 900, full body 1tr2 - 1tr5</td></tr>
                <tr><td>PV</td><td>950 - 1tr1</td></tr>
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
                <tr><td>Drip marketing</td><td>1tr2 - 1tr5</td></tr>
                <tr><td>Splash art</td><td>char: 1tr2 - 1tr5, bg: 200 - 500</td></tr>
                <tr><td>Tranh sinh nhật</td><td>mặc định halfbody + full bg 650</td></tr>
                <tr><td>Đĩa nhạc</td><td>250-350</td></tr>
                <tr><td>TCG</td><td>char: 900, details 100 - 300</td></tr>
                <tr><td>Ảnh thẻ</td><td>250</td></tr>
                <tr><td>PV</td><td>950 - 1tr1</td></tr>
                <tr><td>Design</td><td>mặt trước/ mặt sau: 300/ 1 mặt, mặt bên: 200/ 1 mặt</td></tr>
                <tr><td>Tranh lễ</td><td>650</td></tr>
                <tr><td>Illust</td><td>chest 300, half 450, thigh 900, full body 1tr2 - 1tr5</td></tr>
              </tbody>
            </table>
            <h4>Phụ phí details</h4>
            <p>Details char: 20 - 100</p>
            <p>Details bg: 50 - 400</p>
            <p>Phí private: 70%</p>
            <p>Phí thương mại x 5</p>
          </div>
        )}
        {currentPage === 'sample' && (
          <div className={`content-section ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
            <button className="home-btn" onClick={() => handlePageChange('intro')}>✕</button>
            {Object.entries(sampleCategories).map(([category, imgs]) => (
              <div key={category}>
                <h3>{category}</h3>
                <div className="sample-grid">
                  {imgs.map(img => (
                    <img key={img} src={img} alt="Sample" className="sample-thumb" onClick={() => setZoomedImage(img)} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
        {currentPage === 'terms' && (
          <div className={`content-section ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
            <button className="home-btn" onClick={() => handlePageChange('intro')}>✕</button>
            <h2>Điều khoản dịch vụ</h2>
            <h3>Về giao dịch</h3>
            <p>Trong giao dịch, page sẽ rep tin nhắn trong thời gian sớm và nhanh nhất trong khả năng.</p>
            <p>Khách lần đầu đặt vui lòng show bài check legit hoặc lịch sử giao dịch cho page check trước khi giao dịch.</p>
            <p>Người giao dịch với khách là staff không phải artist, xin hãy rõ ràng trong khi giao dịch để tránh khó xử.</p>
            <p>Nếu không hài lòng về tranh hoặc có vấn đề không ưng ý, hãy feedback sớm cho bên staff để chúng tôi liên lạc với artist sửa chữa hoàn thiện. Chúng tôi không chịu trách nhiệm thêm về commission sau khi giao dịch đã hoàn tất.</p>
            <p>Không nhận chuyển khoản trước kể cả cọc, thanh toán 100% sau khi hoàn thiện com. Thanh toán trong vòng 2 ngày sau khi hoàn thiện, nếu có việc gấp, lí do chính đáng sẽ được gia hạn tối đa 5 ngày để hoàn thành chuyển khoản. Sau 1 tuần không chuyển khoản full sẽ được đưa vào blacklist cấm giao dịch.</p>
            <p>Gift sẽ được tặng ngẫu nhiên, hỗ trợ des tính 30% giá com des hoàn chỉnh.</p>
            <p>Deadline theo khách đặt, có nhận deadline gấp nhưng hạn chế số lượng, để artist có thể hoàn thiện com được tốt nhất có thể.</p>
            <p>Mỗi lần mở 2 slot, pick slot random và brief phù hợp với khả năng của hoạ sĩ. Hoàn thiện xong sẽ mở đợt mới ( không có thời gian cụ thể hay báo trước ). Comment vào bài nhận com để lấy slot.</p>
            <p>Bên mình huỷ com bất chợt sẽ có bồi thường gift nhỏ cho khách.</p>
            <p>Artist có quyền từ chối giao dịch commission, sẽ có list riêng những người cấm giao dịch.</p>
            <p>Không reup, feed tranh commission cho AI, ăn cắp chất xám, heavy ref, trace tranh,..</p>
            <p>Sẽ được đổi loại commission trong khả năng artist cho phép.</p>
            <p>Không cho đổi brief đột xuất, nếu đã chốt rồi không được đổi.</p>
            <h3>Về Commission</h3>
            <p>Quá trình update comm: sketch - final</p>
            <p>Free sửa 5 lần, những lần sửa sau + 10k</p>
            <p>Phí edit free.</p>
            <p>Khi update commission, bên mình sẽ giảm chất lượng hd, kí hoặc gắn wtm để khách check tranh, sau khi hoàn thành thanh toán sẽ giao file hd.</p>
            <p>Brief cần có yêu cầu như sau: + Nhân vật: reference, tính cách, biểu cảm mong muốn. + Pose, ref background, tone màu mong muốn, hướng sáng, vibe tranh. + Phải có hình ảnh minh hoạ rõ ràng, có thể phác người que nhà cửa một mẩu miễn là nhìn được. + Để trong link gg docs, notion, file riêng, etc để không bị trôi lạc mất idea.</p>
            <h3>Lưu ý</h3>
            <p>Không nhận char không có design, không hỗ trợ idea commission.</p>
            <h3>Về Credit và giới thiệu</h3>
            <p>Credit tên page, không được thiếu cre.</p>
            <p>Giới thiệu page cho khách khác phải có sự cho phép của page, giới thiệu với ai phải cho page check qua trước.</p>
            <p>Vì là liên lạc trung gian qua staff nên vui lòng không tra hỏi thông tin đời tư của hoạ sĩ.</p>
          </div>
        )}
        <div className="buttons">
          <button className="image-button" onClick={() => handlePageChange('menu')}>
            <img src="/images/IMG_9022.PNG" alt="Thực đơn" />
            <span>Thực đơn</span>
          </button>
          <button className="image-button" onClick={() => handlePageChange('sample')}>
            <img src="/images/IMG_9023.PNG" alt="Sample" />
            <span>Sample</span>
          </button>
          <button className="image-button" onClick={() => handlePageChange('terms')}>
            <img src="/images/IMG_9026.PNG" alt="Điều khoản" />
            <span>Điều khoản</span>
          </button>
        </div>
      </div>
      {zoomedImage && (
        <div className="modal" onClick={() => setZoomedImage(null)}>
          <img src={zoomedImage} alt="Zoomed" className="zoomed-image" />
        </div>
      )}
    </div>
  )
}

export default App

