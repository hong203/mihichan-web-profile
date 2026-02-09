import { useState, useEffect } from 'react'
import './App.css'

const App = () => {
  const [currentPage, setCurrentPage] = useState('intro')
  const [zoomedImage, setZoomedImage] = useState(null)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [showSOS, setShowSOS] = useState(false)
  const [gameFilter, setGameFilter] = useState('all')
  const [currentAboutMember, setCurrentAboutMember] = useState(null)

  useEffect(() => {
    const contentSections = document.querySelectorAll('.content-section')
    contentSections.forEach(section => {
      let isDown = false
      let startY
      let scrollTop

      // Drag content to scroll
      section.addEventListener('mousedown', (e) => {
        // Check if clicking on scrollbar area
        const isOnScrollbar = e.clientX > section.clientWidth - 20
        if (isOnScrollbar) return
        
        isDown = true
        startY = e.pageY - section.offsetTop
        scrollTop = section.scrollTop
        section.style.cursor = 'grabbing'
      })

      section.addEventListener('mouseleave', () => {
        isDown = false
        section.style.cursor = ''
      })

      section.addEventListener('mouseup', () => {
        isDown = false
        section.style.cursor = ''
      })

      section.addEventListener('mousemove', (e) => {
        if (!isDown) return
        e.preventDefault()
        const y = e.pageY - section.offsetTop
        const walk = (y - startY) * 2
        section.scrollTop = scrollTop - walk
      })

      // Custom scrollbar drag handling
      let isDraggingScrollbar = false
      let scrollbarStartY = 0
      let scrollStartTop = 0

      section.addEventListener('mousedown', (e) => {
        const isOnScrollbar = e.clientX > section.clientWidth - 20
        if (!isOnScrollbar) return

        isDraggingScrollbar = true
        scrollbarStartY = e.clientY
        scrollStartTop = section.scrollTop
        section.style.cursor = `url('/images/cursor_165000 (3) (1) (1) (1).svg'), grab`
      })

      document.addEventListener('mousemove', (e) => {
        if (!isDraggingScrollbar) return

        const deltaY = e.clientY - scrollbarStartY
        const scrollableHeight = section.scrollHeight - section.clientHeight
        const trackHeight = section.clientHeight
        section.scrollTop = scrollStartTop + (deltaY / trackHeight) * scrollableHeight
      })

      document.addEventListener('mouseup', () => {
        if (isDraggingScrollbar) {
          isDraggingScrollbar = false
          section.style.cursor = `url('/images/cursor_165000 (3) (1) (1) (1).svg'), pointer`
        }
      })
    })
  }, [])

  const handlePageChange = (page) => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentPage(page)
      setIsTransitioning(false)
    }, 150)
  }

  const sampleCategories = {
    genshin: {
      'Commission design Genshin Impact': [
        '/images/Messenger_creation_2182361892292925.webp',
        '/images/received_2161330058030449.webp'
      ],
      'Commission tranh lễ của Genshin Impact': [],
      'Commissions sinh nhật Genshin Impact': [
        '/images/received_1117452703657446.webp',
        '/images/received_1311826354045520.webp'
      ],
      'Drip marketing Genshin Impact': [
        '/images/Messenger_creation_756844766847047.webp',
        '/images/received_1393896148809879.webp',
        '/images/received_1416997689810660.webp',
        '/images/received_1449657256723766.webp',
        '/images/received_1562638098389272.webp',
        '/images/received_1701172437935441.webp'
      ],
      'Commission PV Genshin Impact': [
        '/images/received_1412281827057662.webp',
        '/images/received_25243662968662600.webp'
      ]
    },
    honkai: {
      'Commission design Honkai Star Rail': [
        '/images/received_854452750556527.webp',
        '/images/received_1175087241017516.webp',
        '/images/received_1368443194344526.webp',
        '/images/received_1384825243370872.webp',
        '/images/received_1394072818797196.webp',
        '/images/received_1570674027701435.webp'
      ],
      'Commission tranh lễ của Honkai Star Rail': [
        '/images/received_1236150855045834.webp',
        '/images/received_3203525419806902.webp'
      ],
      'Drip marketing Honkai Star Rail': [
        '/images/received_919209520529917.webp',
        '/images/received_744932198650957.webp'
      ],
      'Commission PV Honkai Star Rail': []
    }
  }

  const getVisibleCategories = () => {
    if (gameFilter === 'all') {
      return { ...sampleCategories.genshin, ...sampleCategories.honkai }
    }
    return sampleCategories[gameFilter] || {}
  }

  const aboutMembers = [
    {
      id: 'admin3125',
      image: '/images/626000983_122112474837194668_260994134633122175_n.jpg',
      label: 'Admin 3125',
      description: 'Người điều hướng content page, update waitlist, dỗ artist (không nín thì chích điện), đzai số một thế giới, rep ib của khách như đang dỗ khách, khách nào cũng là cục cưng của 3125！\nQuote: chỉ cần ngươi vui ta liền vẻ ~'
    },
    {
      id: 'admin34',
      image: '/images/626061030_122112474879194668_8106129427359772503_n.jpg',
      label: 'Admin 34',
      description: 'Stalker số một của artist, hỏi tranh nào gần như cũng lôi ra được. Là người trực tương tác chính của page, bị vắt nghĩ content, hỗ trợ công việc cho 2 ad còn lại khi họ bận, còn lại vô dụng đa số thời gian. Chỉ bị gọi lên khi cần gắn ấn thủy và nghĩ cap đăng bài. Là chủ tiệm tạp hóa ven đường.\nQuote: muốn cơ cấu thì cứ tìm anh ;3JL'
    },
    {
      id: 'mihichan',
      image: '/images/626257203_122112474741194668_567190496570626637_n.jpg',
      label: 'Artist: Mihichan',
      description: 'Artist duy nhất của nhà, thích ăn dô li bi, hở ra đòi 10 tỷ, được cưng như trứng vàng, hứng như hứng hoa, không hề có chuyện bị ngược đãi! Nô lệ tư bản, bị vắt khô tới 99 tuổi, 100 tuổi mà nằm thì dùng cầu cơ gọi dậy vẽ tiếp. Bình thường sẽ không phải người giao tiếp và tương tác với bên ngoài.\nQuote: hãy donate cho mihi chan để cô ấy ko phải vẽ nữa!'
    },
    {
      id: 'adminde',
      image: '/images/628235245_122112474789194668_5829119856214250656_n.jpg',
      label: 'Admin Dế',
      description: 'Admin cội nguồn của page, lo việc viết điều khoản, bảng giá, xếp lịch trình và tổng hợp thông tin khách. Người dí artist no1, là người trực inb chính của page. Ngày ấy, nếu không có bản mặt dày như tường thành của ad Dế, giờ chúng ta đã không có một ngôi nhà xây nên cho Mihichan, hãy cảm ơn tui đi !!!! Là một fan bts toàn thời gian nên Dế rất dễ thương dễ nch thích nàm quen luôn chào đón các quý khách đến vứi mihi chan !\nQuote: fan girl ăn ngon mặc ấm vui buồn hihihaha vì 7 người đàn ông hàn quốc'
    }
  ]

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
          <>
            <div className="intro">
              <h1>ִִ ࣪✶⋆.˚Tiệm gà rán Mihi chan˖°𓇼</h1>
              <p>Commission: Closed.</p>
              <div className="avatar" onClick={() => setShowSOS(true)}>
                <img src="/images/imageavata.png" alt="Mihi chan Avatar" />
              </div>
              <div className="intro-text">
                <p>Chào mừng quý khách đến với tiệm gà rán của Mihi chan, rất hân hạnh được phục vụ các bạn ʕ ᵔᴥᵔ ʔ !</p>
                <p>Hãy để tiệm gà của Mihi chan phác họa nên những gam màu rực rỡ cho nhân vật của riêng bạn.</p>
                <p>Liên hệ với page qua <a href="https://www.facebook.com/profile.php?id=61585840063897" target="_blank" rel="noopener noreferrer">Mihi chan</a></p>
              </div>
            </div>
            <div className="queue-buttons-wrapper">
              <button className="queue-button" onClick={() => window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')}>
                <img src="/images/IMG_9041.PNG" alt="Lấy số chờ" />
                <span>Bấm để lấy số chờ</span>
              </button>
              <button className="about-button" onClick={() => handlePageChange('about')}>
                <img src="/images/IMG_9063.PNG" alt="About us" />
                <span>About us</span>
              </button>
            </div>
          </>
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
            <div className="game-filter-buttons">
              <button 
                className={`game-filter-btn ${gameFilter === 'genshin' ? 'active' : ''}`}
                onClick={() => setGameFilter('genshin')}
              >
                GENSHIN IMPACT
              </button>
              <button 
                className={`game-filter-btn ${gameFilter === 'honkai' ? 'active' : ''}`}
                onClick={() => setGameFilter('honkai')}
              >
                HONKAI STAR RAIL
              </button>
            </div>
            {Object.entries(getVisibleCategories()).map(([category, imgs]) => (
              <div key={category}>
                <h3>{category}</h3>
                {imgs.length === 0 ? (
                  <p className="empty-category">Mihi chan quá lười để vẽ Sample :33</p>
                ) : (
                  <div className="sample-grid">
                    {imgs.map(img => (
                      <img key={img} src={img} alt="Sample" className="sample-thumb" onClick={() => setZoomedImage(img)} />
                    ))}
                  </div>
                )}
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
        {currentPage === 'about' && !currentAboutMember && (
          <div className={`content-section ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
            <button className="home-btn" onClick={() => handlePageChange('intro')}>✕</button>
            <h2>About us</h2>
            <div className="about-grid">
              {aboutMembers.map((member) => (
                <div key={member.id} className="about-member-card" onClick={() => setCurrentAboutMember(member.id)}>
                  <img src={member.image} alt={member.label} className="about-member-image" />
                  <div className="about-member-label">{member.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}
        {currentPage === 'about' && currentAboutMember && (
          <div className={`content-section about-detail ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
            <button className="home-btn" onClick={() => setCurrentAboutMember(null)}>✕</button>
            {aboutMembers.find(m => m.id === currentAboutMember) && (
              <>
                <div className="about-detail-wrapper">
                  <div className="about-member-avatar">
                    <img src={aboutMembers.find(m => m.id === currentAboutMember).image} alt={aboutMembers.find(m => m.id === currentAboutMember).label} />
                  </div>
                  <div className="about-member-content">
                    <h2>{aboutMembers.find(m => m.id === currentAboutMember).label}</h2>
                    <div className="about-member-description">
                      {aboutMembers.find(m => m.id === currentAboutMember).description.split('\n').map((line, idx) => (
                        <p key={idx}>{line}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
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
      {showSOS && (
        <div className="sos-overlay" onClick={() => setShowSOS(false)}>
          <div className="sos-modal" onClick={(e) => e.stopPropagation()}>
            <p className="sos-text">Mihi chan đang bị staff giam gửi tín hiệu SOS tới bạn</p>
            <p className="sos-text">Xin hãy giải cứu Mihi chan khỏi bàn tay ác quỷ tại:</p>
            <p className="sos-text">————————————</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default App

