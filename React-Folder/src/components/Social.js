import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faLinkedin, faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';


const Social = () => {
  return (
    <div>
      <div class="bg-white py-24 sm:py-32">
        <div class="mx-auto grid max-w-7xl px-6 lg:px-8 xl:grid-cols-3">
            <div class="max-w-2xl mr-20">
              <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Connect with Us!</h2>
              <p class="mt-6 text-lg leading-8 text-gray-600">Connect with us on social media for the latest updates and community engagement.</p>
            </div>
            <ul class="grid gap-y-12  lg:grid-cols-8 xl:col-span-2 mt-8" >
                <li>
                    <div class="flex items-center gap-x-6">
                      <a href="https://www.linkedin.com/company/jmedia-corp/" target="blank" class="text-sm font-semibold leading-6 text-indigo-600">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                      </a> 
                    </div>
                </li>
                <li>
                    <div class="flex items-center gap-x-6">
                      <a href="https://www.youtube.com/@jmediacorporation3903" target="blank" class="text-sm font-semibold leading-6 text-indigo-600">
                        <FontAwesomeIcon icon={faYoutube} size="2x" />
                      </a>                    
                    </div>
                </li>
                <li>
                    <div class="flex items-center gap-x-6">
                      <a href="https://x.com/PhoenixLab94718" target="blank" class="text-sm font-semibold leading-6 text-indigo-600">
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                       </a>                  
                    </div>
                </li>
                <li>
                    <div class="flex items-center gap-x-6">
                      <a href="https://www.facebook.com/people/Phoenix-Labs/100085708352952/" target="blank" class="text-sm font-semibold leading-6 text-indigo-600">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                       </a> 
                    </div>
                </li>
                <li>
                    <div class="flex items-center gap-x-6">
                      <a href="https://www.instagram.com/phoenixlabs1/" target="blank" class="text-sm font-semibold leading-6 text-indigo-600">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                       </a> 
                    </div>
                </li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Social
