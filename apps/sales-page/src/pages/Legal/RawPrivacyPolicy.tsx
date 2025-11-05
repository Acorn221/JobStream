/* eslint-disable */
import './style.css';

import React, { ReactNode, HTMLProps } from 'react';

interface BtdProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
}

export const BDT: React.FC<BtdProps> = ({ children, ...props }) => <span {...props}>{children}</span>;



export const RawPrivacyPolicy = () => (
   <div>
     <div data-custom-class="body">
       <div>
         <strong>
           <span style={{ fontSize: '26px' }}>
             <span data-custom-class="title">
               <BDT className="block-component" />
               <BDT className="question">PRIVACY POLICY</BDT>
               <BDT className="statement-end-if-in-editor" />
             </span>
           </span>
         </strong>
       </div>
       <div><br /></div>
       <div>
         <span style={{ color: 'rgb(127, 127, 127)' }}>
           <strong>
             <span style={{ fontSize: '15px' }}>
               <span data-custom-class="subtitle">
                 Last updated
                 <BDT className="question">October 25, 2023</BDT>
               </span>
             </span>
           </strong>
         </span>
       </div>
       <div><br /></div>
       <div><br /></div>
       <div><br /></div>
       <div style={{ lineHeight: '1.5' }}>
         <span style={{ color: 'rgb(127, 127, 127)' }}>
           <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>
             <span data-custom-class="body_text">
               This privacy notice for
               <BDT className="question">
                 J4A Industries
                 <BDT className="block-component" />
               </BDT>
               (
               <BDT className="block-component" />
               '
               <strong>we</strong>
               ', '
               <strong>us</strong>
               ', or '
               <strong>our</strong>
               '
               <BDT className="else-block" />
             </span>
             <span data-custom-class="body_text">
               ), describes how and why we might collect, store, use, and/or share (
               <BDT className="block-component" />
               '
               <strong>process</strong>
               '
               <BDT className="else-block" />
               ) your information when you use our services (
               <BDT className="block-component" />
               '
               <strong>Services</strong>
               '
               <BDT className="else-block" />
               ), such as when you:
             </span>
           </span>
         </span>
         <span style={{ fontSize: '15px' }}>
           <span style={{ color: 'rgb(127, 127, 127)' }}>
             <span data-custom-class="body_text">
               <span style={{ color: 'rgb(89, 89, 89)' }}>
                 <span data-custom-class="body_text">
                   <BDT className="block-component" />
                 </span>
               </span>
             </span>
           </span>
         </span>
       </div>
       <ul>
         <li style={{ lineHeight: '1.5' }}>
           <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
             <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
               <span data-custom-class="body_text">
                 Visit our website
                 <BDT className="block-component" />
                 at
                 <BDT className="question">jobstream.uk</BDT>
                 <span style={{ fontSize: '15px' }}>
                   <span style={{ color: 'rgb(89, 89, 89)' }}>
                     <span data-custom-class="body_text">
                       <span style={{ fontSize: '15px' }}>
                         <span style={{ color: 'rgb(89, 89, 89)' }}>
                           <BDT className="statement-end-if-in-editor">, or any website of ours that links to this privacy notice</BDT>
                         </span>
                       </span>
                     </span>
                   </span>
                 </span>
               </span>
             </span>
           </span>
         </li>
       </ul>
       <div>
         <BDT className="block-component">
           <span style={{ fontSize: '15px' }}>
             <span style={{ fontSize: '15px' }}>
               <span style={{ color: 'rgb(127, 127, 127)' }}>
                 <span data-custom-class="body_text">
                   <span style={{ color: 'rgb(89, 89, 89)' }}>
                     <span data-custom-class="body_text">
                       <BDT className="block-component" />
                     </span>
                   </span>
                 </span>
               </span>
             </span>
           </span>
         </BDT>
         &lt;&gt;
         <div style={{ lineHeight: '1.5' }}>
           <span style={{ fontSize: '15px' }}>
             <span style={{ color: 'rgb(127, 127, 127)' }}>
               <span data-custom-class="body_text">
                 <span style={{ color: 'rgb(89, 89, 89)' }}>
                   <span data-custom-class="body_text">
                     <BDT className="block-component" />
                   </span>
                 </span>
               </span>
             </span>
           </span>
         </div>
         <ul>
           <li style={{ lineHeight: '1.5' }}>
             <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
               <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                 <span data-custom-class="body_text">
                   Engage with us in other related ways, including any sales, marketing, or events
                   <span style={{ fontSize: '15px' }}>
                     <span style={{ color: 'rgb(89, 89, 89)' }}>
                       <span data-custom-class="body_text">
                         <span style={{ fontSize: '15px' }}>
                           <span style={{ color: 'rgb(89, 89, 89)' }}>
                             <BDT className="statement-end-if-in-editor" />
                           </span>
                         </span>
                       </span>
                     </span>
                   </span>
                 </span>
               </span>
             </span>
           </li>
         </ul>
         <div style={{ lineHeight: '1.5' }}>
           <span style={{ fontSize: '15px' }}>
             <span style={{ color: 'rgb(127, 127, 127)' }}>
               <span data-custom-class="body_text">
                 <strong>Questions or concerns? </strong>
                 Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services.
                 <BDT className="block-component" />
                 If you still have any questions or concerns, please contact us at{' '}
                 <BDT className="question">privacy@j4a.uk</BDT>
                 .
               </span>
             </span>
           </span>
         </div>
         <div style={{ lineHeight: '1.5' }}><br /></div>
         <div style={{ lineHeight: '1.5' }}><br /></div>
         <div style={{ lineHeight: '1.5' }}><strong><span style={{ fontSize: '15px' }}><span data-custom-class="heading_1">SUMMARY OF KEY POINTS</span></span></strong></div>
         <div style={{ lineHeight: '1.5' }}><br /></div>
         <div style={{ lineHeight: '1.5' }}>
           <span style={{ fontSize: '15px' }}><span data-custom-class="body_text"><strong><em>This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our </em></strong></span></span>
           <a data-custom-class="link" href="https://jobstream.uk/privacy-policy#toc"><span style={{ fontSize: '15px' }}><span data-custom-class="body_text"><strong><em>table of contents</em></strong></span></span></a>
           <span style={{ fontSize: '15px' }}><span data-custom-class="body_text"><strong><em> below to find the section you are looking for.</em></strong></span></span>
         </div>
         <div style={{ lineHeight: '1.5' }}><br /></div>
         <div style={{ lineHeight: '1.5' }}>
           <span style={{ fontSize: '15px' }}>
             <span data-custom-class="body_text">
               <strong>What personal information do we process?</strong>
               {' '}
               When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use. Learn more about
               {' '}
             </span>
           </span>
           <a data-custom-class="link" href="https://jobstream.uk/privacy-policy#personalinfo"><span style={{ fontSize: '15px' }}><span data-custom-class="body_text">personal information you disclose to us</span></span></a>
           <span data-custom-class="body_text">.</span>
         </div>
         <div style={{ lineHeight: '1.5' }}><br /></div>
         <div style={{ lineHeight: '1.5' }}>
           <span style={{ fontSize: '15px' }}>
             <span data-custom-class="body_text">
               <strong>Do we process any sensitive personal information?</strong>
               <BDT className="block-component" />
               We do not process sensitive personal information.
               <BDT className="else-block" />
             </span>
           </span>
         </div>
         <div style={{ lineHeight: '1.5' }}><br /></div>
         <div style={{ lineHeight: '1.5' }}>
           <span style={{ fontSize: '15px' }}>
             <span data-custom-class="body_text">
               <strong>Do we receive any information from third parties?</strong>
               <BDT className="block-component" />
               We do not receive any information from third parties.
               <BDT className="else-block" />
             </span>
           </span>
         </div>
         <div style={{ lineHeight: '1.5' }}><br /></div>
         <div style={{ lineHeight: '1.5' }}>
           <span style={{ fontSize: '15px' }}>
             <span data-custom-class="body_text">
               <strong>How do we process your information?</strong>
               {' '}
               We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Learn more about
               {' '}
             </span>
           </span>
           <a data-custom-class="link" href="https://jobstream.uk/privacy-policy#infouse"><span style={{ fontSize: '15px' }}><span data-custom-class="body_text">how we process your information</span></span></a>
           <span data-custom-class="body_text">.</span>
         </div>
         <div style={{ lineHeight: '1.5' }}><br /></div>
         <div style={{ lineHeight: '1.5' }}>
           <span style={{ fontSize: '15px' }}>
             <span data-custom-class="body_text">
               <strong>
                 In what situations and with which
                 <BDT className="block-component" />
                 parties do we share personal information?
               </strong>
               We may share information in specific situations and with specific
               <BDT className="block-component" />
               third parties. Learn more about
             </span>
           </span>
           <a data-custom-class="link" href="https://jobstream.uk/privacy-policy#whoshare"><span style={{ fontSize: '15px' }}><span data-custom-class="body_text">when and with whom we share your personal information</span></span></a>
           <span style={{ fontSize: '15px' }}>
             <span data-custom-class="body_text">
               .
               <BDT className="block-component" />
             </span>
           </span>
         </div>
         <div style={{ lineHeight: '1.5' }}><br /></div>
         <div style={{ lineHeight: '1.5' }}>
           <span style={{ fontSize: '15px' }}>
             <span data-custom-class="body_text">
               <strong>How do we keep your information safe?</strong>
               {' '}
               We have
               <BDT className="block-component" />
               organisational
               <BDT className="else-block" />
               and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other
               <BDT className="block-component" />
               unauthorised
               <BDT className="else-block" />
               third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Learn more about
             </span>
           </span>
           <a data-custom-class="link" href="https://jobstream.uk/privacy-policy#infosafe"><span style={{ fontSize: '15px' }}><span data-custom-class="body_text">how we keep your information safe</span></span></a>
           <span data-custom-class="body_text">.</span>
           <span style={{ fontSize: '15px' }}>
             <span data-custom-class="body_text">
               <BDT className="statement-end-if-in-editor" />
             </span>
           </span>
         </div>
         <div style={{ lineHeight: '1.5' }}><br /></div>
         <div style={{ lineHeight: '1.5' }}>
           <span style={{ fontSize: '15px' }}>
             <span data-custom-class="body_text">
               <strong>What are your rights?</strong>
               {' '}
               Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Learn more about
               {' '}
             </span>
           </span>
           <a data-custom-class="link" href="https://jobstream.uk/privacy-policy#privacyrights"><span style={{ fontSize: '15px' }}><span data-custom-class="body_text">your privacy rights</span></span></a>
           <span data-custom-class="body_text">.</span>
         </div>
         <div style={{ lineHeight: '1.5' }}><br /></div>
         <div style={{ lineHeight: '1.5' }}>
           <span style={{ fontSize: '15px' }}>
             <span data-custom-class="body_text">
               <strong>How do you exercise your rights?</strong>
               {' '}
               The easiest way to exercise your rights is by
               <BDT className="block-component" />
               visiting
               <BDT className="question">jobstream.uk/data-request</BDT>
               <BDT className="else-block" />
               , or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.
             </span>
           </span>
         </div>
         <div style={{ lineHeight: '1.5' }}><br /></div>
         <div style={{ lineHeight: '1.5' }}>
           <span style={{ fontSize: '15px' }}><span data-custom-class="body_text">Want to learn more about what we do with any information we collect? </span></span>
           <a data-custom-class="link" href="https://jobstream.uk/privacy-policy#toc"><span style={{ fontSize: '15px' }}><span data-custom-class="body_text">Review the privacy notice in full</span></span></a>
           <span style={{ fontSize: '15px' }}><span data-custom-class="body_text">.</span></span>
         </div>
         <div style={{ lineHeight: '1.5' }}><br /></div>
         <div style={{ lineHeight: '1.5' }}><br /></div>
         <div id="toc" style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px' }}><span style={{ color: 'rgb(127, 127, 127)' }}><span style={{ color: 'rgb(0, 0, 0)' }}><strong><span data-custom-class="heading_1">TABLE OF CONTENTS</span></strong></span></span></span></div>
         <div style={{ lineHeight: '1.5' }}><br /></div>
         <div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px' }}><a data-custom-class="link" href="https://jobstream.uk/privacy-policy#infocollect"><span style={{ color: 'rgb(89, 89, 89)' }}>1. WHAT INFORMATION DO WE COLLECT?</span></a></span></div>
         <div style={{ lineHeight: '1.5' }}>
           <span style={{ fontSize: '15px' }}>
             <a data-custom-class="link" href="https://jobstream.uk/privacy-policy#infouse">
               <span style={{ color: 'rgb(89, 89, 89)' }}>
                 2. HOW DO WE PROCESS YOUR INFORMATION?
                 <BDT className="block-component" />
               </span>
             </a>
           </span>
         </div>
         <div style={{ lineHeight: '1.5' }}>
           <span style={{ fontSize: '15px' }}>
             <a data-custom-class="link" href="https://jobstream.uk/privacy-policy#legalbases">
               <span style={{ color: 'rgb(89, 89, 89)' }}>
                 3.
                 {' '}
                 <span style={{ fontSize: '15px' }}><span style={{ color: 'rgb(89, 89, 89)' }}>WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?</span></span>
                 <BDT className="statement-end-if-in-editor" />
               </span>
             </a>
           </span>
         </div>
         <div style={{ lineHeight: '1.5' }}>
           <span style={{ fontSize: '15px' }}>
             <span style={{ color: 'rgb(89, 89, 89)' }}><a data-custom-class="link" href="https://jobstream.uk/privacy-policy#whoshare">4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</a></span>
             <span data-custom-class="body_text">
               <BDT className="block-component" />
             </span>
             <span style={{ color: 'rgb(127, 127, 127)' }}>
               <span style={{ color: 'rgb(89, 89, 89)' }}>
                 <span data-custom-class="body_text">
                   <span style={{ color: 'rgb(89, 89, 89)' }}>
                     <BDT className="block-component" />
                   </span>
                 </span>
                 <span data-custom-class="body_text">
                   <span style={{ color: 'rgb(89, 89, 89)' }}>
                     <span style={{ color: 'rgb(89, 89, 89)' }}>
                       <span style={{ color: 'rgb(89, 89, 89)' }}>
                         <BDT className="block-component" />
                       </span>
                     </span>
                   </span>
                 </span>
               </span>
             </span>
           </span>
         </div>
         &lt;&gt;
         <div style={{ lineHeight: '1.5' }}>
           <span style={{ fontSize: '15px' }}>
             <a data-custom-class="link" href="https://jobstream.uk/privacy-policy#sociallogins"><span style={{ color: 'rgb(89, 89, 89)' }}><span style={{ color: 'rgb(89, 89, 89)' }}><span style={{ color: 'rgb(89, 89, 89)' }}>5. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</span></span></span></a>
             <span style={{ color: 'rgb(127, 127, 127)' }}>
               <span style={{ color: 'rgb(89, 89, 89)' }}>
                 <span data-custom-class="body_text">
                   <span style={{ color: 'rgb(89, 89, 89)' }}>
                     <span style={{ color: 'rgb(89, 89, 89)' }}>
                       <span style={{ color: 'rgb(89, 89, 89)' }}>
                         <BDT className="statement-end-if-in-editor" />
                       </span>
                     </span>
                     <BDT className="block-component" />
                   </span>
                 </span>
               </span>
             </span>
           </span>
         </div>
         <div style={{ lineHeight: '1.5' }}>
           <span style={{ fontSize: '15px' }}>
             <a data-custom-class="link" href="https://jobstream.uk/privacy-policy#inforetain"><span style={{ color: 'rgb(89, 89, 89)' }}>6. HOW LONG DO WE KEEP YOUR INFORMATION?</span></a>
             <span style={{ color: 'rgb(127, 127, 127)' }}>
               <span style={{ color: 'rgb(89, 89, 89)' }}>
                 <span data-custom-class="body_text">
                   <span style={{ color: 'rgb(89, 89, 89)' }}>
                     <span style={{ color: 'rgb(89, 89, 89)' }}>
                       <BDT className="block-component" />
                     </span>
                   </span>
                 </span>
               </span>
             </span>
           </span>
         </div>
         <div style={{ lineHeight: '1.5' }}>
           <span style={{ fontSize: '15px' }}>
             <a data-custom-class="link" href="https://jobstream.uk/privacy-policy#infosafe"><span style={{ color: 'rgb(89, 89, 89)' }}>7. HOW DO WE KEEP YOUR INFORMATION SAFE?</span></a>
             <span style={{ color: 'rgb(127, 127, 127)' }}>
               <span style={{ color: 'rgb(89, 89, 89)' }}>
                 <span data-custom-class="body_text">
                   <span style={{ color: 'rgb(89, 89, 89)' }}>
                     <BDT className="statement-end-if-in-editor" />
                     <BDT className="block-component" />
                   </span>
                 </span>
               </span>
             </span>
           </span>
         </div>
         <div style={{ lineHeight: '1.5' }}>
           <span style={{ fontSize: '15px' }}>
             <a data-custom-class="link" href="https://jobstream.uk/privacy-policy#infominors"><span style={{ color: 'rgb(89, 89, 89)' }}>8. DO WE COLLECT INFORMATION FROM MINORS?</span></a>
             <span style={{ color: 'rgb(127, 127, 127)' }}>
               <span style={{ color: 'rgb(89, 89, 89)' }}>
                 <span data-custom-class="body_text">
                   <span style={{ color: 'rgb(89, 89, 89)' }}>
                     <BDT className="statement-end-if-in-editor" />
                   </span>
                 </span>
               </span>
             </span>
           </span>
         </div>
         <div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px' }}><span style={{ color: 'rgb(89, 89, 89)' }}><a data-custom-class="link" href="https://jobstream.uk/privacy-policy#privacyrights">9. WHAT ARE YOUR PRIVACY RIGHTS?</a></span></span></div>
         <div style={{ lineHeight: '1.5' }}>
           <span style={{ fontSize: '15px' }}>
             <a data-custom-class="link" href="https://jobstream.uk/privacy-policy#DNT">
               <span style={{ color: 'rgb(89, 89, 89)' }}>
                 10. CONTROLS FOR DO-NOT-TRACK FEATURES
                 <BDT className="block-component" />
               </span>
             </a>
           </span>
         </div>
         <div style={{ lineHeight: '1.5' }}>
           <span style={{ fontSize: '15px' }}><a data-custom-class="link" href="https://jobstream.uk/privacy-policy#uslaws"><span style={{ color: 'rgb(89, 89, 89)' }}>11. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</span></a></span>
           <BDT className="block-component"><span style={{ fontSize: '15px' }}><span data-custom-class="body_text" /></span></BDT>
         </div>
         <div style={{ lineHeight: '1.5' }}>
           <a data-custom-class="link" href="https://jobstream.uk/privacy-policy#otherlaws"><span style={{ fontSize: '15px' }}>12. DO OTHER REGIONS HAVE SPECIFIC PRIVACY RIGHTS?</span></a>
           <span style={{ fontSize: '15px' }}>
             <BDT className="statement-end-if-in-editor"><span data-custom-class="body_text" /></BDT>
           </span>
         </div>
         <div style={{ lineHeight: '1.5' }}>
           <BDT className="block-component">
             <span style={{ fontSize: '15px' }} />
           </BDT>
           <BDT className="block-component" />
           <BDT className="block-component" />
           <BDT className="block-component" />
           <BDT className="block-component" />
           <BDT className="block-component" />
           <BDT className="block-component" />
           <BDT className="block-component" />
           <BDT className="block-component" />
           <BDT className="block-component" />
         </div>
         &lt;&gt;
         <div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px' }}><a data-custom-class="link" href="https://jobstream.uk/privacy-policy#policyupdates"><span style={{ color: 'rgb(89, 89, 89)' }}>13. DO WE MAKE UPDATES TO THIS NOTICE?</span></a></span></div>
         <div style={{ lineHeight: '1.5' }}><a data-custom-class="link" href="https://jobstream.uk/privacy-policy#contact"><span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>14. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</span></a></div>
         <div style={{ lineHeight: '1.5' }}><a data-custom-class="link" href="https://jobstream.uk/privacy-policy#request"><span style={{ color: 'rgb(89, 89, 89)' }}>15. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</span></a></div>
         <div style={{ lineHeight: '1.5' }}><br /></div>
         <div style={{ lineHeight: '1.5' }}><br /></div>
         <div id="infocollect" style={{ lineHeight: '1.5' }}><span style={{ color: 'rgb(127, 127, 127)' }}><span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span id="control" style={{ color: 'rgb(0, 0, 0)' }}><strong><span data-custom-class="heading_1">1. WHAT INFORMATION DO WE COLLECT?</span></strong></span></span></span></span></span></div>
         <div style={{ lineHeight: '1.5' }}><br /></div>
         <div id="personalinfo" style={{ lineHeight: '1.5' }}><span data-custom-class="heading_2" style={{ color: 'rgb(0, 0, 0)' }}><span style={{ fontSize: '15px' }}><strong>Personal information you disclose to us</strong></span></span></div>
         <div>
           <div><br /></div>
           <div style={{ lineHeight: '1.5' }}>
             <span style={{ color: 'rgb(127, 127, 127)' }}>
               <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>
                 <span data-custom-class="body_text"><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text"><strong><em>In Short:</em></strong></span></span></span></span>
                 <span data-custom-class="body_text">
                   <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                     <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                       <span data-custom-class="body_text">
                         <strong><em> </em></strong>
                         <em>We collect personal information that you provide to us.</em>
                       </span>
 
                     </span>
                   </span>
                 </span>
               </span>
             </span>
           </div>
         </div>
         <div style={{ lineHeight: '1.5' }}><br /></div>
         <div style={{ lineHeight: '1.5' }}>
           <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
             <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
               <span data-custom-class="body_text">
                 We collect personal information that you voluntarily provide to us when you
                 <span style={{ fontSize: '15px' }}>
                   <BDT className="block-component" />
                 </span>
                 register on the Services,
               </span>
               <span style={{ fontSize: '15px' }}>
                 <span data-custom-class="body_text">
                   <span style={{ fontSize: '15px' }}>
                     <BDT className="statement-end-if-in-editor" />
                   </span>
                 </span>
                 <span data-custom-class="body_text">express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</span>
               </span>
             </span>
           </span>
         </div>
         <div style={{ lineHeight: '1.5' }}><br /></div>
         <div style={{ lineHeight: '1.5' }}>
           <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
             <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
               <span data-custom-class="body_text">
                 <span style={{ fontSize: '15px' }}>
                   <BDT className="block-component" />
                 </span>
               </span>
             </span>
           </span>
         </div>
         <div style={{ lineHeight: '1.5' }}>
           <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
             <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
               <span data-custom-class="body_text">
                 <strong>Personal Information Provided by You.</strong>
                 {' '}
                 The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:
                 <span style={{ fontSize: '15px' }}>
                   <span data-custom-class="body_text">
                     <BDT className="forloop-component" />
                   </span>
                 </span>
               </span>
             </span>
           </span>
         </div>
         <ul>
           <li style={{ lineHeight: '1.5' }}>
             <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
               <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                 <span data-custom-class="body_text">
                   <span style={{ fontSize: '15px' }}>
                     <span data-custom-class="body_text">
                       <BDT className="question">names</BDT>
                     </span>
                   </span>
                 </span>
               </span>
             </span>
           </li>
         </ul>
         <div style={{ lineHeight: '1.5' }}>
           <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
             <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
               <span data-custom-class="body_text">
                 <span style={{ fontSize: '15px' }}>
                   <span data-custom-class="body_text">
                     <BDT className="forloop-component" />
                   </span>
                 </span>
               </span>
             </span>
           </span>
         </div>
         <ul>
           <li style={{ lineHeight: '1.5' }}>
             <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
               <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                 <span data-custom-class="body_text">
                   <span style={{ fontSize: '15px' }}>
                     <span data-custom-class="body_text">
                       <BDT className="question">email addresses</BDT>
                     </span>
                   </span>
                 </span>
               </span>
             </span>
           </li>
         </ul>
         <div style={{ lineHeight: '1.5' }}>
           <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
             <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
               <span data-custom-class="body_text">
                 <span style={{ fontSize: '15px' }}>
                   <span data-custom-class="body_text">
                     <BDT className="forloop-component" />
                   </span>
                 </span>
               </span>
             </span>
           </span>
         </div>
         <ul>
           <li style={{ lineHeight: '1.5' }}>
             <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
               <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                 <span data-custom-class="body_text">
                   <span style={{ fontSize: '15px' }}>
                     <span data-custom-class="body_text">
                       <BDT className="question">job titles</BDT>
                     </span>
                   </span>
                 </span>
               </span>
             </span>
           </li>
         </ul>
         <div style={{ lineHeight: '1.5' }}>
           <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
             <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
               <span data-custom-class="body_text">
                 <span style={{ fontSize: '15px' }}>
                   <span data-custom-class="body_text">
                     <BDT className="forloop-component" />
                   </span>
                 </span>
               </span>
             </span>
           </span>
         </div>
         <ul>
           <li style={{ lineHeight: '1.5' }}>
             <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
               <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                 <span data-custom-class="body_text">
                   <span style={{ fontSize: '15px' }}>
                     <span data-custom-class="body_text">
                       <BDT className="question">resumes (curriculum vitae)</BDT>
                     </span>
                   </span>
                 </span>
               </span>
             </span>
           </li>
         </ul>
         <div style={{ lineHeight: '1.5' }}>
           <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
             <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
               <span data-custom-class="body_text">
                 <span style={{ fontSize: '15px' }}>
                   <span data-custom-class="body_text">
                     <BDT className="forloop-component" />
                   </span>
                 </span>
               </span>
             </span>
           </span>
         </div>
         <ul>
           <li style={{ lineHeight: '1.5' }}>
             <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
               <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                 <span data-custom-class="body_text">
                   <span style={{ fontSize: '15px' }}>
                     <span data-custom-class="body_text">
                       <BDT className="question">ip addresses</BDT>
                     </span>
                   </span>
                 </span>
               </span>
             </span>
           </li>
         </ul>
         <div style={{ lineHeight: '1.5' }}>
           <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
             <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
               <span data-custom-class="body_text">
                 <span style={{ fontSize: '15px' }}>
                   <span data-custom-class="body_text">
                     <BDT className="forloop-component" />
                   </span>
                 </span>
               </span>
             </span>
           </span>
         </div>
         <ul>
           <li style={{ lineHeight: '1.5' }}>
             <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
               <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                 <span data-custom-class="body_text">
                   <span style={{ fontSize: '15px' }}>
                     <span data-custom-class="body_text">
                       <BDT className="question">debit/credit card numbers</BDT>
                     </span>
                   </span>
                 </span>
               </span>
             </span>
           </li>
         </ul>
         <div style={{ lineHeight: '1.5' }}>
           <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
             <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
               <span data-custom-class="body_text">
                 <span style={{ fontSize: '15px' }}>
                   <span data-custom-class="body_text">
                     <BDT className="forloop-component" />
                   </span>
                 </span>
               </span>
             </span>
           </span>
         </div>
         <ul>
           <li style={{ lineHeight: '1.5' }}>
             <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
               <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                 <span data-custom-class="body_text">
                   <span style={{ fontSize: '15px' }}>
                     <span data-custom-class="body_text">
                       <BDT className="question">billing addresses</BDT>
                     </span>
                   </span>
                 </span>
               </span>
             </span>
           </li>
         </ul>
         <div style={{ lineHeight: '1.5' }}>
           <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
             <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
               <span data-custom-class="body_text">
                 <span style={{ fontSize: '15px' }}>
                   <span data-custom-class="body_text">
                     <BDT className="forloop-component" />
                   </span>
                   <span data-custom-class="body_text">
                     <BDT className="statement-end-if-in-editor" />
                   </span>
                 </span>
               </span>
             </span>
           </span>
         </div>
         <div id="sensitiveinfo" style={{ lineHeight: '1.5' }}>
           <span style={{ fontSize: '15px' }}>
             <span data-custom-class="body_text">
               <strong>Sensitive Information.</strong>
               <BDT className="block-component" />
               We do not process sensitive information.
             </span>
           </span>
         </div>
         <div style={{ lineHeight: '1.5' }}><br /></div>
         <div style={{ lineHeight: '1.5' }}>
           <span style={{ fontSize: '15px' }}>
             <span data-custom-class="body_text">
               <BDT className="else-block" />
             </span>
           </span>
           <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
             <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
               <span data-custom-class="body_text">
                 <span style={{ fontSize: '15px' }}>
                   <span data-custom-class="body_text">
                     <BDT className="block-component" />
                   </span>
                 </span>
               </span>
             </span>
           </span>
         </div>
         <div style={{ lineHeight: '1.5' }}>
           <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
             <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
               <span data-custom-class="body_text">
                 <strong>Payment Data.</strong>
                 {' '}
                 We may collect data necessary to process your payment if you make purchases, such as your payment instrument number, and the security code associated with your payment instrument. All payment data is stored by
                 <BDT className="forloop-component" />
                 <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                   <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                     <span data-custom-class="body_text">
                       <span style={{ fontSize: '15px' }}>
                         <span data-custom-class="body_text">
                           <BDT className="block-component" />
                         </span>
                       </span>
                     </span>
                   </span>
                 </span>
                 <BDT className="question">Stripe</BDT>
                 <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                   <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                     <span data-custom-class="body_text">
                       <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                         <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                           <span data-custom-class="body_text">
                             <span style={{ fontSize: '15px' }}>
                               <span data-custom-class="body_text">
                                 <BDT className="block-component" />
                               </span>
                             </span>
                           </span>
                           <span data-custom-class="body_text">
                             <span style={{ fontSize: '15px' }}>
                               <span style={{ color: 'rgb(89, 89, 89)' }}>
                                 <span data-custom-class="body_text">
                                   <span style={{ fontSize: '15px' }}>
                                     <span style={{ color: 'rgb(89, 89, 89)' }}>
                                       <span data-custom-class="body_text">
                                         <span style={{ color: 'rgb(89, 89, 89)' }}>
                                           <span style={{ fontSize: '15px' }}>
                                             <span data-custom-class="body_text">
                                                 <BDT className="forloop-component" />
                                              </span>
                                           </span>
                                         </span>
                                       </span>
                                     </span>
                                   </span>
                                 </span>
                               </span>
                             </span>
                           </span>
                         </span>
                       </span>
                       . You may find their privacy notice link(s) here:
                       <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                         <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                           <span data-custom-class="body_text">
                             <BDT className="forloop-component" />
                             <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                               <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                                 <span data-custom-class="body_text">
                                   <span style={{ fontSize: '15px' }}>
                                     <span data-custom-class="body_text">
                                       <BDT className="block-component" />
                                     </span>
                                   </span>
                                 </span>
                               </span>
                             </span>
                           </span>
                         </span>
                       </span>
                       <BDT className="question"><a href="https://stripe.com/gb/privacy" target="_blank" data-custom-class="link" rel="noreferrer">https://stripe.com/gb/privacy</a></BDT>
                       <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                         <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                           <span data-custom-class="body_text">
                             <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                               <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                                 <span data-custom-class="body_text">
                                   <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                                     <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                                       <span data-custom-class="body_text">
                                         <span style={{ fontSize: '15px' }}>
                                           <span data-custom-class="body_text">
                                             <BDT className="block-component" />
                                           </span>
                                         </span>
                                       </span>
                                     </span>
                                   </span>
                                 </span>
                               </span>
                             </span>
                             <BDT className="forloop-component" />
                             <span style={{ fontSize: '15px' }}>
                               <span data-custom-class="body_text">
                                 .
                                 <BDT className="block-component" />
                               </span>
                             </span>
                           </span>
                         </span>
                       </span>
                     </span>
                   </span>
                 </span>
               </span>
             </span>
           </span>
         </div>
         <div style={{ lineHeight: '1.5' }}><br /></div>
         <div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text"><span style={{ fontSize: '15px' }}><span data-custom-class="body_text"><BDT className="statement-end-if-in-editor"><BDT className="block-component" /></BDT></span></span></span></span></span></div>
         <div style={{ lineHeight: '1.5' }}>
           <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
             <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
               <span data-custom-class="body_text">
                 <strong>Social Media Login Data. </strong>
                 We may provide you with the option to register with us using your existing social media account details, like your Facebook, Twitter, or other social media account. If you choose to register in this way, we will collect the information described in the section called
                 {' '}
                 <BDT className="block-component" />
                 '
                 <BDT className="else-block" />
                 <span style={{ fontSize: '15px' }}><span data-custom-class="body_text"><span style={{ fontSize: '15px' }}><span style={{ color: 'rgb(89, 89, 89)' }}><a data-custom-class="link" href="https://jobstream.uk/privacy-policy#sociallogins">HOW DO WE HANDLE YOUR SOCIAL LOGINS?</a></span></span></span></span>
                 <BDT className="block-component" />
                 '
                 <BDT className="else-block" />
                 {' '}
                 below.
               </span>
             </span>
           </span>
         </div>
         <div style={{ lineHeight: '1.5' }}><br /></div>
         <div style={{ lineHeight: '1.5' }}>
           <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text"><span style={{ fontSize: '15px' }}><BDT className="statement-end-if-in-editor"><BDT className="statement-end-if-in-editor" /></BDT></span></span></span></span>
           <BDT className="block-component" />
         </div>
         <div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text">All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</span></span></span></div>
         <div style={{ lineHeight: '1.5' }}><br /></div>
         <div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text"><BDT className="block-component" /></span></span></span></div>
         <div style={{ lineHeight: '1.5' }}><span data-custom-class="heading_2" style={{ color: 'rgb(0, 0, 0)' }}><span style={{ fontSize: '15px' }}><strong>Information automatically collected</strong></span></span></div>
         <div>
           <div><br /></div>
           <div style={{ lineHeight: '1.5' }}>
             <span style={{ color: 'rgb(127, 127, 127)' }}>
               <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>
                 <span data-custom-class="body_text"><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text"><strong><em>In Short:</em></strong></span></span></span></span>
                 <span data-custom-class="body_text">
                   <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                     <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                       <span data-custom-class="body_text">
                         <strong><em> </em></strong>
                         <em>Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.</em>
                       </span>
                     </span>
 
                   </span>
                 </span>
               </span>
             </span>
           </div>
         </div>
         <div style={{ lineHeight: '1.5' }}><br /></div>
         <div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text">We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.</span></span></span></div>
         <div style={{ lineHeight: '1.5' }}><br /></div>
         <div style={{ lineHeight: '1.5' }}>
           <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
             <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text"><BDT className="block-component" /></span></span>
             <span data-custom-class="body_text"><BDT className="block-component" /></span>
           </span>
         </div>
         <div style={{ lineHeight: '1.5' }}>
           <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
             <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
               <span data-custom-class="body_text">
                 The information we collect includes:
                 <BDT className="block-component" />
               </span>
             </span>
           </span>
         </div>
         <ul>
           <li style={{ lineHeight: '1.5' }}>
             <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
               <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                 <span data-custom-class="body_text">
                   <em>Log and Usage Data.</em>
                   {' '}
                   Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services
                   <span style={{ fontSize: '15px' }}> </span>
                   (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called
                   {' '}
                   <BDT className="block-component" />
                   'crash dumps'
                   <BDT className="else-block" />
                   ), and hardware settings).
                   <span style={{ fontSize: '15px' }}><span style={{ color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text"><span style={{ fontSize: '15px' }}><span style={{ color: 'rgb(89, 89, 89)' }}><BDT className="statement-end-if-in-editor" /></span></span></span></span></span>
                 </span>
               </span>
             </span>
           </li>
         </ul>
         <div style={{ lineHeight: '1.5' }}><BDT className="block-component"><span style={{ fontSize: '15px' }}><span data-custom-class="body_text" /></span></BDT></div>
         <ul>
           <li style={{ lineHeight: '1.5' }}>
             <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
               <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                 <span data-custom-class="body_text">
                   <em>Device Data.</em>
                   {' '}
                   We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.
                   <span style={{ fontSize: '15px' }}><span style={{ color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text"><span style={{ fontSize: '15px' }}><span style={{ color: 'rgb(89, 89, 89)' }}><BDT className="statement-end-if-in-editor" /></span></span></span></span></span>
                 </span>
               </span>
             </span>
           </li>
         </ul>
         <div style={{ lineHeight: '1.5' }}><BDT className="block-component"><span style={{ fontSize: '15px' }}><span data-custom-class="body_text" /></span></BDT></div>
         <ul>
           <li style={{ lineHeight: '1.5' }}>
             <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
               <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                 <span data-custom-class="body_text">
                   <em>Location Data.</em>
                   {' '}
                   We collect location data such as information about your device's location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Services. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. However, if you choose to opt out, you may not be able to use certain aspects of the Services.
                   <span style={{ fontSize: '15px' }}><span style={{ color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text"><span style={{ fontSize: '15px' }}><span style={{ color: 'rgb(89, 89, 89)' }}><BDT className="statement-end-if-in-editor" /></span></span></span></span></span>
                 </span>
               </span>
             </span>
           </li>
         </ul>
         <div>
           <BDT className="block-component"><span style={{ fontSize: '15px' }} /></BDT>
           <BDT className="statement-end-if-in-editor" />
           {' '}
           <span data-custom-class="body_text"><span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}><span data-custom-class="body_text"><span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}><span data-custom-class="body_text"><BDT className="statement-end-if-in-editor"><BDT className="block-component" /></BDT></span></span></span></span></span>
           {' '}
           <span style={{ fontSize: '15px' }}><span data-custom-class="body_text"><BDT className="block-component" /></span></span>
         </div>
         &lt;&gt;
         <div id="infouse" style={{ lineHeight: '1.5' }}><span style={{ color: 'rgb(127, 127, 127)' }}><span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span id="control" style={{ color: 'rgb(0, 0, 0)' }}><strong><span data-custom-class="heading_1">2. HOW DO WE PROCESS YOUR INFORMATION?</span></strong></span></span></span></span></span></div>
         <div>
           <div style={{ lineHeight: '1.5' }}><br /></div>
           <div style={{ lineHeight: '1.5' }}>
             <span style={{ color: 'rgb(127, 127, 127)' }}>
               <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>
                 <span data-custom-class="body_text">
                   <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                     <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                       <span data-custom-class="body_text">
                         <strong><em>In Short: </em></strong>
                         <em>We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</em>
                       </span>
 
                     </span>
                   </span>
                 </span>
               </span>
             </span>
           </div>
         </div>
         <div style={{ lineHeight: '1.5' }}><br /></div>
         <div style={{ lineHeight: '1.5' }}>
           <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
             <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
               <span data-custom-class="body_text">
                 <strong>We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</strong>
                 <BDT className="block-component" />
               </span>
             </span>
           </span>
         </div>
         <ul>
           <li style={{ lineHeight: '1.5' }}>
             <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
               <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                 <span data-custom-class="body_text">
                   <strong>To facilitate account creation and authentication and otherwise manage user accounts. </strong>
                   We may process your information so you can create and log in to your account, as well as keep your account in working order.
                   <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                     <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                       <span data-custom-class="body_text">
                         <span style={{ fontSize: '15px' }}>
                           <span style={{ color: 'rgb(89, 89, 89)' }}>
                             <span data-custom-class="body_text">
                               <span style={{ fontSize: '15px' }}>
                                 <span style={{ color: 'rgb(89, 89, 89)' }}>
                                   <span data-custom-class="body_text">
                                     <BDT className="statement-end-if-in-editor" />
                                   </span>
                                 </span>
                               </span>
                             </span>
                           </span>
                         </span>
                       </span>
                     </span>
                   </span>
                 </span>
               </span>
             </span>
           </li>
         </ul>
         <div style={{ lineHeight: '1.5' }}>
           <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
             <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
               <span data-custom-class="body_text">
                 <BDT className="block-component" />
               </span>
             </span>
           </span>
           &lt;&gt;
           <div style={{ lineHeight: '1.5' }}>
             <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
               <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                 <span data-custom-class="body_text">
                   <BDT className="block-component" />
                 </span>
               </span>
             </span>
           </div>
           <ul>
             <li style={{ lineHeight: '1.5' }}>
               <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                 <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                   <span data-custom-class="body_text">
                     <strong>To deliver and facilitate delivery of services to the user. </strong>
                     We may process your information to provide you with the requested service.
                     <span style={{ fontSize: '15px' }}>
                       <span style={{ color: 'rgb(89, 89, 89)' }}>
                         <span data-custom-class="body_text">
                           <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                             <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                               <span data-custom-class="body_text">
                                 <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                                   <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                                     <span data-custom-class="body_text">
                                       <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                                         <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                                           <span data-custom-class="body_text">
                                                 <span style={{ fontSize: '15px' }}>
                                                   <span style={{ color: 'rgb(89, 89, 89)' }}>
                                                     <span data-custom-class="body_text">
                                                       <span style={{ fontSize: '15px' }}>
                                                         <span style={{ color: 'rgb(89, 89, 89)' }}>
                                                           <span data-custom-class="body_text">
                                                             <BDT className="statement-end-if-in-editor" />
                                                           </span>
                                                         </span>
                                                       </span>
                                                     </span>
                                                   </span>
                                                 </span>
                                               </span>
                                         </span>
                                       </span>
                                     </span>
                                   </span>
                                 </span>
                               </span>
                             </span>
                           </span>
                         </span>
                       </span>
                     </span>
                   </span>
                 </span>
               </span>
             </li>
           </ul>
           <div style={{ lineHeight: '1.5' }}>
             <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
               <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                 <span data-custom-class="body_text">
                   <BDT className="block-component" />
                 </span>
               </span>
             </span>
             &lt;&gt;
             <div style={{ lineHeight: '1.5' }}>
               <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                 <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                   <span data-custom-class="body_text">
                     <BDT className="block-component" />
                   </span>
                 </span>
               </span>
             </div>
             <ul>
               <li style={{ lineHeight: '1.5' }}>
                 <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                   <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                     <span data-custom-class="body_text">
                       <strong>To respond to user inquiries/offer support to users. </strong>
                       We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.
                       <BDT className="statement-end-if-in-editor" />
                     </span>
                   </span>
                 </span>
               </li>
             </ul>
             <div style={{ lineHeight: '1.5' }}>
               <BDT className="block-component"><span style={{ fontSize: '15px' }} /></BDT>
               &lt;&gt;
               <div style={{ lineHeight: '1.5' }}>
                 <BDT className="block-component"><span style={{ fontSize: '15px' }} /></BDT>
               </div>
               <ul>
                 <li style={{ lineHeight: '1.5' }}>
                   <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                     <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                       <span data-custom-class="body_text">
                         <strong>To send administrative information to you. </strong>
                         We may process your information to send you details about our products and services, changes to our terms and policies, and other similar information.
                         <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                           <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                             <span data-custom-class="body_text">
                               <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                                 <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                                   <span data-custom-class="body_text">
                                     <BDT className="statement-end-if-in-editor" />
                                   </span>
                                 </span>
                               </span>
                             </span>
                           </span>
                         </span>
                       </span>
                     </span>
                   </span>
                 </li>
               </ul>
               <div style={{ lineHeight: '1.5' }}>
                 <BDT className="block-component"><span style={{ fontSize: '15px' }} /></BDT>
                 <div style={{ lineHeight: '1.5' }}>
                   <BDT className="block-component"><span style={{ fontSize: '15px' }}><span data-custom-class="body_text" /></span></BDT>
                   <p style={{ fontSize: '15px', lineHeight: '1.5' }}>
                     <BDT className="block-component"><span style={{ fontSize: '15px' }} /></BDT>
                   </p>
                   <p style={{ fontSize: '15px', lineHeight: '1.5' }}>
                     <BDT className="block-component"><span style={{ fontSize: '15px' }} /></BDT>
                   </p>
                   <p style={{ fontSize: '15px', lineHeight: '1.5' }}>
                     <BDT className="block-component" />
                   </p>
                   <p style={{ fontSize: '15px', lineHeight: '1.5' }}>
                     <BDT className="block-component" />
                   </p>
                   <div style={{ lineHeight: '1.5' }}>
                     <BDT className="block-component"><span style={{ fontSize: '15px' }}><span data-custom-class="body_text" /></span></BDT>
                     <div style={{ lineHeight: '1.5' }}>
                       <BDT className="block-component"><span style={{ fontSize: '15px' }} /></BDT>
                       <div style={{ lineHeight: '1.5' }}>
                         <BDT className="block-component"><span style={{ fontSize: '15px' }} /></BDT>
                         <div style={{ lineHeight: '1.5' }}>
                           <span style={{ fontSize: '15px' }}>
                             <BDT className="block-component"><span data-custom-class="body_text" /></BDT>
                           </span>
                           <div style={{ lineHeight: '1.5' }}>
                             <BDT className="block-component"><span style={{ fontSize: '15px' }}><span data-custom-class="body_text" /></span></BDT>
                             <div style={{ lineHeight: '1.5' }}>
                               <BDT className="block-component"><span style={{ fontSize: '15px' }}><span data-custom-class="body_text" /></span></BDT>
                               <div style={{ lineHeight: '1.5' }}>
                                 <BDT className="block-component"><span style={{ fontSize: '15px' }}><span data-custom-class="body_text" /></span></BDT>
                                 <div style={{ lineHeight: '1.5' }}>
                                   <BDT className="block-component"><span style={{ fontSize: '15px' }}><span data-custom-class="body_text" /></span></BDT>
                                   <div style={{ lineHeight: '1.5' }}>
                                     <BDT className="block-component"><span style={{ fontSize: '15px' }}><span data-custom-class="body_text" /></span></BDT>
                                     <div style={{ lineHeight: '1.5' }}>
                                       <BDT className="block-component"><span style={{ fontSize: '15px' }}><span data-custom-class="body_text" /></span></BDT>
                                       <div style={{ lineHeight: '1.5' }}>
                                         <BDT className="block-component"><span style={{ fontSize: '15px' }}><span data-custom-class="body_text" /></span></BDT>
                                         <div style={{ lineHeight: '1.5' }}>
                                           <BDT className="block-component"><span style={{ fontSize: '15px' }}><span data-custom-class="body_text" /></span></BDT>
                                           <div style={{ lineHeight: '1.5' }}>
                                             <BDT className="block-component"><span style={{ fontSize: '15px' }}><span data-custom-class="body_text" /></span></BDT>
                                             <div style={{ lineHeight: '1.5' }}>
                                                   <BDT className="block-component"><span style={{ fontSize: '15px' }}><span data-custom-class="body_text" /></span></BDT>
                                                   &lt;&gt;
                                                   <div style={{ lineHeight: '1.5' }}>
                                                     <BDT className="block-component"><span style={{ fontSize: '15px' }}><span data-custom-class="body_text" /></span></BDT>
                                                   </div>
                                                   <ul>
                                                     <li style={{ lineHeight: '1.5' }}>
                                                       <span data-custom-class="body_text">
                                                         <span style={{ fontSize: '15px' }}>
                                                           <strong>To save or protect an individual's vital interest.</strong>
                                                           {' '}
                                                           We may process your information when necessary to save or protect an individual’s vital interest, such as to prevent harm.
                                                         </span>
                                                       </span>
                                                       <BDT className="statement-end-if-in-editor"><span style={{ fontSize: '15px' }}><span data-custom-class="body_text" /></span></BDT>
                                                     </li>
                                                   </ul>
                                                   <div style={{ lineHeight: '1.5' }}>
                                                     <BDT className="block-component"><span style={{ fontSize: '15px' }}><span data-custom-class="body_text" /></span></BDT>
                                                     <BDT className="block-component"><span style={{ fontSize: '15px' }}><span data-custom-class="body_text" /></span></BDT>
                                                     <span style={{ fontSize: '15px' }}>
                                                       <span data-custom-class="body_text">
                                                         <BDT className="forloop-component" />
                                                       </span>
                                                     </span>
                                                   </div>
                                                   <ul>
                                                     <li style={{ lineHeight: '1.5' }}>
                                                       <span style={{ fontSize: '15px' }}>
                                                         <span data-custom-class="body_text">
                                                           <BDT className="question"><strong>To generate content in relation to helping the user get a job</strong></BDT>
                                                           <strong>.</strong>
                                                           <BDT className="question">__________</BDT>
                                                         </span>
                                                       </span>
                                                     </li>
                                                   </ul>
                                                   <div style={{ lineHeight: '1.5' }}>
                                                     <span style={{ fontSize: '15px' }}>
                                                       <span data-custom-class="body_text">
                                                         <BDT className="forloop-component" />
                                                         <BDT className="statement-end-if-in-editor" />
                                                       </span>
                                                     </span>
                                                     <BDT className="block-component"><span style={{ fontSize: '15px' }}><span data-custom-class="body_text" /></span></BDT>
                                                     <BDT className="block-component"><span style={{ fontSize: '15px' }}><span data-custom-class="body_text" /></span></BDT>
                                                   </div>
                                                   <div style={{ lineHeight: '1.5' }}><br /></div>
                                                   <div id="legalbases" style={{ lineHeight: '1.5' }}><strong><span style={{ fontSize: '15px' }}><span data-custom-class="heading_1">3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?</span></span></strong></div>
                                                   <div style={{ lineHeight: '1.5' }}><br /></div>
                                                   <div style={{ lineHeight: '1.5' }}>
                                                     <em>
                                                       <span style={{ fontSize: '15px' }}>
                                                         <span data-custom-class="body_text">
                                                           <strong>In Short: </strong>
                                                           We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e.
                                                           <BDT className="block-component" />
                                                           legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or
                                                           <BDT className="block-component" />
                                                           fulfil
                                                           <BDT className="else-block" />
                                                           our contractual obligations, to protect your rights, or to
                                                           <BDT className="block-component" />
                                                           fulfil
                                                           <BDT className="else-block" />
                                                           our legitimate business interests.
                                                         </span>
                                                       </span>
                                                     </em>
                                                     <span style={{ fontSize: '15px' }}>
                                                       <span data-custom-class="body_text">
                                                         <BDT className="block-component" />
                                                       </span>
                                                       <span data-custom-class="body_text">
                                                         <BDT className="block-component" />
                                                       </span>
                                                     </span>
                                                   </div>
                                                   <div style={{ lineHeight: '1.5' }}><br /></div>
                                                   <div style={{ lineHeight: '1.5' }}>
                                                     <em><span style={{ fontSize: '15px' }}><span data-custom-class="body_text"><strong><u>If you are located in the EU or UK, this section applies to you.</u></strong></span></span></em>
                                                     <span style={{ fontSize: '15px' }}>
                                                       <span data-custom-class="body_text">
                                                         <BDT className="statement-end-if-in-editor" />
                                                       </span>
                                                     </span>
                                                   </div>
                                                   <div style={{ lineHeight: '1.5' }}><br /></div>
                                                   <div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px' }}><span data-custom-class="body_text">The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:</span></span></div>
                                                   <ul>
                                                     <li style={{ lineHeight: '1.5' }}>
                                                       <span style={{ fontSize: '15px' }}>
                                                         <span data-custom-class="body_text">
                                                           <strong>Consent. </strong>
                                                           We may process your information if you have given us permission (i.e.
                                                           <BDT className="block-component" />
                                                           consent) to use your personal information for a specific purpose. You can withdraw your consent at any time. Learn more about
                                                         </span>
                                                       </span>
                                                       <a data-custom-class="link" href="https://jobstream.uk/privacy-policy#withdrawconsent"><span style={{ fontSize: '15px' }}><span data-custom-class="body_text">withdrawing your consent</span></span></a>
                                                       <span data-custom-class="body_text">.</span>
                                                     </li>
                                                   </ul>
                                                   <div style={{ lineHeight: '1.5' }}>
                                                     <BDT className="block-component"><span style={{ fontSize: '15px' }}><span data-custom-class="body_text" /></span></BDT>
                                                   </div>
                                                   <ul>
                                                     <li style={{ lineHeight: '1.5' }}>
                                                       <span data-custom-class="body_text">
                                                         <span style={{ fontSize: '15px' }}>
                                                           <strong>Performance of a Contract.</strong>
                                                           {' '}
                                                           We may process your personal information when we believe it is necessary to
                                                           <BDT className="block-component" />
                                                           fulfil
                                                           <BDT className="else-block" />
                                                           our contractual obligations to you, including providing our Services or at your request prior to entering into a contract with you.
                                                         </span>
                                                       </span>
                                                       <BDT className="statement-end-if-in-editor"><span style={{ fontSize: '15px' }}><span data-custom-class="body_text" /></span></BDT>
                                                     </li>
                                                   </ul>
                                                   <div style={{ lineHeight: '1.5' }}>
                                                     <BDT className="block-component"><span style={{ fontSize: '15px' }}><span data-custom-class="body_text" /></span></BDT>
                                                     <BDT className="block-component"><span style={{ fontSize: '15px' }}><span data-custom-class="body_text" /></span></BDT>
                                                   </div>
                                                   <ul>
                                                     <li style={{ lineHeight: '1.5' }}>
                                                       <span data-custom-class="body_text">
                                                         <span style={{ fontSize: '15px' }}>
                                                           <strong>Legal Obligations.</strong>
                                                           {' '}
                                                           We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved.
                                                           <BDT className="statement-end-if-in-editor" />
                                                           <br />
                                                         </span>
                                                       </span>
                                                     </li>
                                                   </ul>
                                                   <div style={{ lineHeight: '1.5' }}>
                                                     <BDT className="block-component"><span style={{ fontSize: '15px' }}><span data-custom-class="body_text" /></span></BDT>
                                                   </div>
                                                   <ul>
                                                     <li style={{ lineHeight: '1.5' }}>
                                                       <span data-custom-class="body_text">
                                                         <span style={{ fontSize: '15px' }}>
                                                           <strong>Vital Interests.</strong>
                                                           {' '}
                                                           We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.
                                                         </span>
                                                       </span>
                                                       <BDT className="statement-end-if-in-editor"><span style={{ fontSize: '15px' }}><span data-custom-class="body_text" /></span></BDT>
                                                     </li>
                                                   </ul>
                                                   <div style={{ lineHeight: '1.5' }}>
                                                     <BDT className="block-component"><span style={{ fontSize: '15px' }}><span data-custom-class="body_text" /></span></BDT>
                                                   </div>
                                                   <div style={{ lineHeight: '1.5' }}>
                                                     <span data-custom-class="body_text">
                                                       <span style={{ fontSize: '15px' }}>
                                                         In legal terms, we are generally the
                                                         <BDT className="block-component" />
                                                         'data controller'
                                                         <BDT className="else-block" />
                                                         under European data protection laws of the personal information described in this privacy notice, since we determine the means and/or purposes of the data processing we perform. This privacy notice does not apply to the personal information we process as a
                                                         <BDT className="block-component" />
                                                         'data processor'
                                                         <BDT className="else-block" />
                                                         on behalf of our customers. In those situations, the customer that we provide services to and with whom we have entered into a data processing agreement is the
                                                         <BDT className="block-component" />
                                                         'data controller'
                                                         <BDT className="else-block" />
                                                         responsible for your personal information, and we merely process your information on their behalf in accordance with your instructions. If you want to know more about our customers' privacy practices, you should read their privacy policies and direct any questions you have to them.
                                                       </span>
                                                     </span>
                                                     <BDT className="statement-end-if-in-editor"><span style={{ fontSize: '15px' }}><span data-custom-class="body_text" /></span></BDT>
                                                     <span data-custom-class="body_text">
                                                       <span style={{ fontSize: '15px' }}>
                                                         <BDT className="block-component">
                                                           <BDT className="block-component" />
                                                         </BDT>
                                                       </span>
                                                     </span>
                                                   </div>
                                                   <div style={{ lineHeight: '1.5' }}><br /></div>
                                                   <div style={{ lineHeight: '1.5' }}>
                                                     <span data-custom-class="body_text">
                                                       <span style={{ fontSize: '15px' }}>
                                                         <strong><u><em>If you are located in Canada, this section applies to you.</em></u></strong>
                                                         <BDT className="statement-end-if-in-editor" />
                                                       </span>
                                                     </span>
                                                   </div>
                                                   <div style={{ lineHeight: '1.5' }}><br /></div>
                                                   <div style={{ lineHeight: '1.5' }}>
                                                     <span data-custom-class="body_text">
                                                       <span style={{ fontSize: '15px' }}>
                                                         We may process your information if you have given us specific permission (i.e.
                                                         <BDT className="block-component" />
                                                         express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e.
                                                         <BDT className="block-component" />
                                                         implied consent). You can
                                                       </span>
                                                     </span>
                                                     <a data-custom-class="link" href="https://jobstream.uk/privacy-policy#withdrawconsent"><span data-custom-class="body_text"><span style={{ fontSize: '15px' }}>withdraw your consent</span></span></a>
                                                     <span data-custom-class="body_text"><span style={{ fontSize: '15px' }}> at any time.</span></span>
                                                   </div>
                                                   <div style={{ lineHeight: '1.5' }}><br /></div>
                                                   <div style={{ lineHeight: '1.5' }}><span data-custom-class="body_text"><span style={{ fontSize: '15px' }}>In some exceptional cases, we may be legally permitted under applicable law to process your information without your consent, including, for example:</span></span></div>
                                                   <ul>
                                                     <li style={{ lineHeight: '1.5' }}><span data-custom-class="body_text"><span style={{ fontSize: '15px' }}>If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way</span></span></li>
                                                   </ul>
                                                   <div style={{ lineHeight: '1.5' }}>
                                                     <span data-custom-class="body_text">
                                                       <span style={{ fontSize: '15px' }}>
                                                         <BDT className="block-component" />
                                                       </span>
                                                     </span>
                                                   </div>
                                                   <ul>
                                                     <li style={{ lineHeight: '1.5' }}>
                                                       <span data-custom-class="body_text">
                                                         <span style={{ fontSize: '15px' }}>
                                                           For investigations and fraud detection and prevention
                                                           <BDT className="statement-end-if-in-editor" />
                                                         </span>
                                                       </span>
                                                     </li>
                                                   </ul>
                                                   <div style={{ lineHeight: '1.5' }}>
                                                     <BDT className="block-component"><span style={{ fontSize: '15px' }}><span data-custom-class="body_text" /></span></BDT>
                                                   </div>
                                                   <ul>
                                                     <li style={{ lineHeight: '1.5' }}>
                                                       <span data-custom-class="body_text"><span style={{ fontSize: '15px' }}>For business transactions provided certain conditions are met</span></span>
                                                       <BDT className="statement-end-if-in-editor"><span style={{ fontSize: '15px' }}><span data-custom-class="body_text" /></span></BDT>
                                                     </li>
                                                   </ul>
                                                   <div style={{ lineHeight: '1.5' }}>
                                                     <BDT className="block-component"><span style={{ fontSize: '15px' }}><span data-custom-class="body_text" /></span></BDT>
                                                   </div>
                                                   <ul>
                                                     <li style={{ lineHeight: '1.5' }}>
                                                       <span data-custom-class="body_text"><span style={{ fontSize: '15px' }}>If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim</span></span>
                                                       <BDT className="statement-end-if-in-editor"><span style={{ fontSize: '15px' }}><span data-custom-class="body_text" /></span></BDT>
                                                     </li>
                                                   </ul>
                                                   <div style={{ lineHeight: '1.5' }}>
                                                     <BDT className="block-component"><span style={{ fontSize: '15px' }}><span data-custom-class="body_text" /></span></BDT>
                                                   </div>
                                                   <ul>
                                                     <li style={{ lineHeight: '1.5' }}>
                                                       <span data-custom-class="body_text"><span style={{ fontSize: '15px' }}>For identifying injured, ill, or deceased persons and communicating with next of kin</span></span>
                                                       <BDT className="statement-end-if-in-editor"><span style={{ fontSize: '15px' }}><span data-custom-class="body_text" /></span></BDT>
                                                     </li>
                                                   </ul>
                                                   <div style={{ lineHeight: '1.5' }}>
                                                     <span data-custom-class="body_text">
                                                       <span style={{ fontSize: '15px' }}>
                                                         <BDT className="block-component" />
                                                       </span>
                                                     </span>
                                                   </div>
                                                   <ul>
                                                     <li style={{ lineHeight: '1.5' }}>
                                                       <span data-custom-class="body_text">
                                                         <span style={{ fontSize: '15px' }}>
                                                           If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse
                                                           <BDT className="statement-end-if-in-editor" />
                                                         </span>
                                                       </span>
                                                     </li>
                                                   </ul>
                                                   <div style={{ lineHeight: '1.5' }}>
                                                     <span data-custom-class="body_text">
                                                       <span style={{ fontSize: '15px' }}>
                                                         <BDT className="block-component" />
                                                       </span>
                                                     </span>
                                                   </div>
                                                   <ul>
                                                     <li style={{ lineHeight: '1.5' }}>
                                                       <span data-custom-class="body_text">
                                                         <span style={{ fontSize: '15px' }}>
                                                           If it is reasonable to expect collection and use with consent would compromise the availability or the accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province
                                                           <BDT className="statement-end-if-in-editor" />
                                                         </span>
                                                       </span>
                                                     </li>
                                                   </ul>
                                                   <div style={{ lineHeight: '1.5' }}>
                                                     <span data-custom-class="body_text">
                                                       <span style={{ fontSize: '15px' }}>
                                                         <BDT className="block-component" />
                                                       </span>
                                                     </span>
                                                   </div>
                                                   <ul>
                                                     <li style={{ lineHeight: '1.5' }}>
                                                       <span data-custom-class="body_text">
                                                         <span style={{ fontSize: '15px' }}>
                                                           If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records
                                                           <BDT className="statement-end-if-in-editor" />
                                                         </span>
                                                       </span>
                                                     </li>
                                                   </ul>
                                                   <div style={{ lineHeight: '1.5' }}>
                                                     <BDT className="block-component"><span style={{ fontSize: '15px' }}><span data-custom-class="body_text" /></span></BDT>
                                                   </div>
                                                   <ul>
                                                     <li style={{ lineHeight: '1.5' }}>
                                                       <span style={{ fontSize: '15px' }}>
                                                         <span data-custom-class="body_text">
                                                           If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced
                                                           <BDT className="statement-end-if-in-editor" />
                                                         </span>
                                                       </span>
                                                     </li>
                                                   </ul>
                                                   <div style={{ lineHeight: '1.5' }}>
                                                     <span style={{ fontSize: '15px' }}>
                                                       <span data-custom-class="body_text">
                                                         <BDT className="block-component" />
                                                       </span>
                                                     </span>
                                                   </div>
                                                   <ul>
                                                     <li style={{ lineHeight: '1.5' }}>
                                                       <span style={{ fontSize: '15px' }}>
                                                         <span data-custom-class="body_text">
                                                           If the collection is solely for journalistic, artistic, or literary purposes
                                                           <BDT className="statement-end-if-in-editor" />
                                                         </span>
                                                       </span>
                                                     </li>
                                                   </ul>
                                                   <div style={{ lineHeight: '1.5' }}>
                                                     <span style={{ fontSize: '15px' }}>
                                                       <span data-custom-class="body_text">
                                                         <BDT className="block-component" />
                                                       </span>
                                                     </span>
                                                   </div>
                                                   <ul>
                                                     <li style={{ lineHeight: '1.5' }}>
                                                       <span style={{ fontSize: '15px' }}>
                                                         <span data-custom-class="body_text">If the information is publicly available and is specified by the regulations</span>
                                                         <BDT className="statement-end-if-in-editor"><span data-custom-class="body_text" /></BDT>
                                                       </span>
                                                     </li>
                                                   </ul>
                                                   <div style={{ lineHeight: '1.5' }}>
                                                     <BDT className="statement-end-if-in-editor"><span style={{ fontSize: '15px' }}><span data-custom-class="body_text" /></span></BDT>
                                                     <BDT className="statement-end-if-in-editor"><span style={{ fontSize: '15px' }}><span data-custom-class="body_text" /></span></BDT>
                                                   </div>
                                                   <div style={{ lineHeight: '1.5' }}><br /></div>
                                                   <div id="whoshare" style={{ lineHeight: '1.5' }}><span style={{ color: 'rgb(127, 127, 127)' }}><span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span id="control" style={{ color: 'rgb(0, 0, 0)' }}><strong><span data-custom-class="heading_1">4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</span></strong></span></span></span></span></span></div>
                                                   <div style={{ lineHeight: '1.5' }}><br /></div>
                                                   <div style={{ lineHeight: '1.5' }}>
                                                     <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                                                       <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                                                         <span data-custom-class="body_text">
                                                           <strong><em>In Short:</em></strong>
                                                           <em>
                                                             We may share information in specific situations described in this section and/or with the following
                                                             <BDT className="block-component" />
                                                             third parties.
                                                           </em>
                                                         </span>
                                                       </span>
                                                     </span>
                                                   </div>
                                                   <div style={{ lineHeight: '1.5' }}>
                                                     <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                                                       <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                                                         <span data-custom-class="body_text">
                                                           <BDT className="block-component" />
                                                         </span>
                                                       </span>
                                                     </span>
                                                   </div>
                                                   <div style={{ lineHeight: '1.5' }}><br /></div>
                                                   <div style={{ lineHeight: '1.5' }}>
                                                     <span style={{ fontSize: '15px' }}>
                                                       <span data-custom-class="body_text">
                                                         We
                                                         <BDT className="block-component" />
                                                         may need to share your personal information in the following situations:
                                                       </span>
                                                     </span>
                                                   </div>
                                                   <ul>
                                                     <li style={{ lineHeight: '1.5' }}>
                                                       <span style={{ fontSize: '15px' }}>
                                                         <span data-custom-class="body_text">
                                                           <strong>Business Transfers.</strong>
                                                           {' '}
                                                           We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
                                                         </span>
                                                       </span>
                                                     </li>
                                                   </ul>
                                                   <div style={{ lineHeight: '1.5' }}>
                                                     <span style={{ fontSize: '15px' }}><span data-custom-class="body_text"><BDT className="block-component" /></span></span>
                                                     <div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px' }}><BDT className="block-component"><span data-custom-class="body_text" /></BDT></span></div>
                                                     <ul>
                                                       <li style={{ lineHeight: '1.5' }}>
                                                         <span style={{ fontSize: '15px' }}>
                                                           <span data-custom-class="body_text">
                                                             <strong>Affiliates. </strong>
                                                             We may share your information with our affiliates, in which case we will require those affiliates to
                                                             {' '}
                                                             <BDT className="block-component" />
                                                             honour
                                                             <BDT className="else-block" />
                                                             {' '}
                                                             this privacy notice. Affiliates include our parent company and any subsidiaries, joint venture partners, or other companies that we control or that are under common control with us.
                                                           </span>
                                                           <BDT className="statement-end-if-in-editor"><span data-custom-class="body_text" /></BDT>
                                                         </span>
                                                       </li>
                                                     </ul>
                                                     <div style={{ lineHeight: '1.5' }}><BDT className="block-component"><span style={{ fontSize: '15px' }}><span data-custom-class="body_text" /></span></BDT></div>
                                                     <ul>
                                                       <li style={{ lineHeight: '1.5' }}>
                                                         <span data-custom-class="body_text">
                                                           <span style={{ fontSize: '15px' }}>
                                                             <strong>Business Partners.</strong>
                                                             {' '}
                                                             We may share your information with our business partners to offer you certain products, services, or promotions.
                                                           </span>
                                                         </span>
                                                         <BDT className="statement-end-if-in-editor"><span style={{ fontSize: '15px' }}><span data-custom-class="body_text" /></span></BDT>
                                                       </li>
                                                     </ul>
                                                     <div style={{ lineHeight: '1.5' }}>
                                                       <BDT className="block-component"><span style={{ fontSize: '15px' }}><span data-custom-class="body_text" /></span></BDT>
                                                       <div style={{ lineHeight: '1.5' }}>
                                                         <BDT className="block-component"><span style={{ fontSize: '15px' }}><span data-custom-class="body_text" /></span></BDT>
                                                         {' '}
                                                         <div style={{ lineHeight: '1.5' }}>
                                                           <BDT className="block-component"><span style={{ fontSize: '15px' }}><span data-custom-class="body_text" /></span></BDT>
                                                           <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}><span style={{ fontSize: '15px' }}><span style={{ color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px' }}><span style={{ color: 'rgb(89, 89, 89)' }}><BDT className="block-component"><span data-custom-class="heading_1" /></BDT></span></span></span></span></span>
                                                           {' '}
                                                           <span data-custom-class="body_text"><span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}><span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}><span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}><span style={{ fontSize: '15px' }}><span style={{ color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px' }}><span style={{ color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text"><BDT className="block-component" /></span></span></span></span></span></span></span></span></span>
                                                         </div>
                                                         &lt;&gt;
                                                         <div style={{ lineHeight: '1.5' }}><br /></div>
                                                         <div id="sociallogins" style={{ lineHeight: '1.5' }}><span style={{ color: 'rgb(127, 127, 127)' }}><span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span id="control" style={{ color: 'rgb(0, 0, 0)' }}><strong><span data-custom-class="heading_1">5. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</span></strong></span></span></span></span></span></div>
                                                         <div style={{ lineHeight: '1.5' }}><br /></div>
                                                         <div style={{ lineHeight: '1.5' }}>
                                                           <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                                                             <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                                                               <span data-custom-class="body_text">
                                                                 <strong><em>In Short: </em></strong>
                                                                 <em>If you choose to register or log in to our Services using a social media account, we may have access to certain information about you.</em>
                                                               </span>
                                                             </span>
                                                           </span>
                                                         </div>
                                                         <div style={{ lineHeight: '1.5' }}><br /></div>
                                                         <div style={{ lineHeight: '1.5' }}>
                                                           <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                                                             <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                                                               <span data-custom-class="body_text">
                                                                 Our Services offer you the ability to register and log in using your third-party social media account details (like your Facebook or Twitter logins). Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile information we receive may vary depending on the social media provider concerned, but will often include your name, email address, friends list, and profile picture, as well as other information you choose to make public on such a social media platform.
                                                                  <span style={{ fontSize: '15px' }}>
                                                                    <span style={{ color: 'rgb(89, 89, 89)' }}>
                                                                      <span data-custom-class="body_text">
                                                                        <BDT className="block-component" />
                                                                      </span>
                                                                    </span>
                                                                  </span>
                                                               </span>
                                                             </span>
                                                           </span>
                                                         </div>
                                                         &lt;&gt;
                                                         <div style={{ lineHeight: '1.5' }}><br /></div>
                                                         <div style={{ lineHeight: '1.5' }}>
                                                           <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                                                             <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                                                               <span data-custom-class="body_text">
                                                                 We will use the information we receive only for the purposes that are described in this privacy notice or that are otherwise made clear to you on the relevant Services. Please note that we do not control, and are not responsible for, other uses of your personal information by your third-party social media provider. We recommend that you review their privacy notice to understand how they collect, use, and share your personal information, and how you can set your privacy preferences on their sites and apps.
                                                                  <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>
                                                                    <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>
                                                                      <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>
                                                                        <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>
                                                                          <span style={{ fontSize: '15px' }}>
                                                                            <span style={{ color: 'rgb(89, 89, 89)' }}>
                                                                              <span style={{ fontSize: '15px' }}>
                                                                                <span style={{ color: 'rgb(89, 89, 89)' }}>
                                                                                  <span data-custom-class="body_text">
                                                                                    <BDT className="statement-end-if-in-editor" />
                                                                                  </span>
                                                                                  <BDT className="block-component">
                                                                                    <span data-custom-class="body_text">
                                                                                      <BDT className="block-component" />
                                                                                    </span>
                                                                                  </BDT>
                                                                                </span>
                                                                              </span>
                                                                            </span>
                                                                          </span>
                                                                        </span>
                                                                      </span>
                                                                    </span>
                                                                  </span>
                                                               </span>
                                                             </span>
                                                           </span>
                                                         </div>
                                                         &lt;&gt;
                                                         <div style={{ lineHeight: '1.5' }}><br /></div>
                                                         <div id="inforetain" style={{ lineHeight: '1.5' }}><span style={{ color: 'rgb(127, 127, 127)' }}><span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span id="control" style={{ color: 'rgb(0, 0, 0)' }}><strong><span data-custom-class="heading_1">6. HOW LONG DO WE KEEP YOUR INFORMATION?</span></strong></span></span></span></span></span></div>
                                                         <div style={{ lineHeight: '1.5' }}><br /></div>
                                                         <div style={{ lineHeight: '1.5' }}>
                                                           <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                                                             <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                                                               <span data-custom-class="body_text">
                                                                 <strong><em>In Short: </em></strong>
                                                                 <em>
                                                   We keep your information for as long as necessary to
                                                                    <BDT className="block-component" />
                                                   fulfil
                                                                    <BDT className="else-block" />
                                                   the purposes outlined in this privacy notice unless otherwise required by law.
                                                                  </em>
                                                               </span>
                                                             </span>
                                                           </span>
                                                         </div>
                                                         <div style={{ lineHeight: '1.5' }}><br /></div>
                                                         <div style={{ lineHeight: '1.5' }}>
                                                           <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                                                             <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                                                               <span data-custom-class="body_text">
                                                                 We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).
                                                                  <BDT className="block-component" />
                                                                 No purpose in this notice will require us keeping your personal information for longer than
                                                                  <span style={{ fontSize: '15px' }}>
                                                                    <span style={{ color: 'rgb(89, 89, 89)' }}>
                                                                      <span data-custom-class="body_text">
                                                                        <BDT className="block-component" />
                                                                      </span>
                                                                    </span>
                                                                  </span>
                                                                 <BDT className="block-component" />
                                                                 <BDT className="question">one (1)</BDT>
                                                                 months past the termination of the user's account
                                                                  <BDT className="block-component" />
                                                                 <span style={{ fontSize: '15px' }}>
                                                   <span style={{ color: 'rgb(89, 89, 89)' }}>
             <span data-custom-class="body_text">
                                                                        <BDT className="else-block" />
                                                                      </span>
           </span>
                                                 </span>
                                                                 .
                                                                </span>
                                                             </span>
                                                           </span>
                                                         </div>
                                                         <div style={{ lineHeight: '1.5' }}><br /></div>
                                                         <div style={{ lineHeight: '1.5' }}>
                                                           <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                                                             <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                                                               <span data-custom-class="body_text">
                                                                 When we have no ongoing legitimate business need to process your personal information, we will either delete or
                                                                  <BDT className="block-component" />
                                                                 anonymise
                                                                  <BDT className="else-block" />
                                                                 such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
                                                                  <span style={{ color: 'rgb(89, 89, 89)' }}>
                                                                    <BDT className="block-component" />
                                                                  </span>
                                                               </span>
                                                             </span>
                                                           </span>
                                                         </div>
                                                         <div style={{ lineHeight: '1.5' }}><br /></div>
                                                         <div id="infosafe" style={{ lineHeight: '1.5' }}><span style={{ color: 'rgb(127, 127, 127)' }}><span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span id="control" style={{ color: 'rgb(0, 0, 0)' }}><strong><span data-custom-class="heading_1">7. HOW DO WE KEEP YOUR INFORMATION SAFE?</span></strong></span></span></span></span></span></div>
                                                         <div style={{ lineHeight: '1.5' }}><br /></div>
                                                         <div style={{ lineHeight: '1.5' }}>
                                                           <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                                                             <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                                                               <span data-custom-class="body_text">
                                                                 <strong><em>In Short: </em></strong>
                                                                 <em>
                                                   We aim to protect your personal information through a system of
                                                                    <BDT className="block-component" />
                                                   organisational
                                                                    <BDT className="else-block" />
                                                   and technical security measures.
                                                                  </em>
                                                               </span>
                                                             </span>
                                                           </span>
                                                         </div>
                                                         <div style={{ lineHeight: '1.5' }}><br /></div>
                                                         <div style={{ lineHeight: '1.5' }}>
                                                           <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                                                             <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                                                               <span data-custom-class="body_text">
                                                                 We have implemented appropriate and reasonable technical and
                                                                  <BDT className="block-component" />
                                                                 organisational
                                                                  <BDT className="else-block" />
                                                                 security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other
                                                                  <BDT className="block-component" />
                                                                 unauthorised
                                                                  <BDT className="else-block" />
                                                                 third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.
                                                                  <span style={{ color: 'rgb(89, 89, 89)' }}>
                                                                    <BDT className="statement-end-if-in-editor" />
                                                                  </span>
                                                                 <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>
                                                   <span data-custom-class="body_text">
             <BDT className="block-component" />
           </span>
                                                 </span>
                                                               </span>
                                                             </span>
                                                           </span>
                                                         </div>
                                                         <div style={{ lineHeight: '1.5' }}><br /></div>
                                                         <div id="infominors" style={{ lineHeight: '1.5' }}><span style={{ color: 'rgb(127, 127, 127)' }}><span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span id="control" style={{ color: 'rgb(0, 0, 0)' }}><strong><span data-custom-class="heading_1">8. DO WE COLLECT INFORMATION FROM MINORS?</span></strong></span></span></span></span></span></div>
                                                         <div style={{ lineHeight: '1.5' }}><br /></div>
                                                         <div style={{ lineHeight: '1.5' }}>
                                                           <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                                                             <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                                                               <span data-custom-class="body_text">
                                                                 <strong><em>In Short:</em></strong>
                                                                 <em>
                                                   We do not knowingly collect data from or market to
                                                                    <BDT className="block-component" />
                                                   children under 18 years of age
                                                                    <BDT className="else-block" />
                                                   .
                                                                  </em>
                                                                 <BDT className="block-component" />
                                                               </span>
                                                             </span>
                                                           </span>
                                                         </div>
                                                         <div style={{ lineHeight: '1.5' }}><br /></div>
                                                         <div style={{ lineHeight: '1.5' }}>
                                                           <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                                                             <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                                                               <span data-custom-class="body_text">
                                                                 We do not knowingly solicit data from or market to children under 18 years of age. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at
                                                                  <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>
                                                                    <span data-custom-class="body_text">
                                                                      <BDT className="block-component" />
                                                                      <BDT className="question">james@jobstream.uk</BDT>
                                                                      <BDT className="statement-end-if-in-editor" />
                                                                    </span>
                                                                  </span>
                                                                 .
                                                                </span>
                                                               <span data-custom-class="body_text">
                                                                 <BDT className="else-block">
                                                   <BDT className="block-component" />
                                                 </BDT>
                                                               </span>
                                                             </span>
                                                           </span>
                                                         </div>
                                                         &lt;&gt;
                                                         <div style={{ lineHeight: '1.5' }}><br /></div>
                                                         <div id="privacyrights" style={{ lineHeight: '1.5' }}><span style={{ color: 'rgb(127, 127, 127)' }}><span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span id="control" style={{ color: 'rgb(0, 0, 0)' }}><strong><span data-custom-class="heading_1">9. WHAT ARE YOUR PRIVACY RIGHTS?</span></strong></span></span></span></span></span></div>
                                                         <div style={{ lineHeight: '1.5' }}><br /></div>
                                                         <div style={{ lineHeight: '1.5' }}>
                                                           <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                                                             <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                                                               <span data-custom-class="body_text">
                                                                 <strong><em>In Short:</em></strong>
                                                                 <em>
                                                   <span style={{ color: 'rgb(89, 89, 89)' }}>
               <span style={{ fontSize: '15px' }}>
               <span data-custom-class="body_text">
                                                                          <em>
                                                                            <BDT className="block-component" />
                                                                          </em>
                                                                        </span>
             </span>
             </span>
                                                   In some regions, such as
                                                                    <BDT className="block-component" />
                                                   the European Economic Area (EEA), United Kingdom (UK), Switzerland, and Canada
                                                                    <BDT className="block-component" />
                                                   , you have rights that allow you greater access to and control over your personal information.
                                                                    <span style={{ color: 'rgb(89, 89, 89)' }}>
                                                                      <span style={{ fontSize: '15px' }}>
                                                                        <span data-custom-class="body_text">
                                                                          <em>
                                                                            <BDT className="statement-end-if-in-editor" />
                                                                          </em>
                                                                        </span>
                                                                      </span>
                                                                    </span>
                                                   You may review, change, or terminate your account at any time.
                                                                  </em>
                                                                 <span style={{ color: 'rgb(89, 89, 89)' }}>
                                                   <span style={{ fontSize: '15px' }}>
               <BDT className="block-component" />
             </span>
                                                 </span>
                                                               </span>
                                                             </span>
                                                           </span>
                                                         </div>
                                                         <div style={{ lineHeight: '1.5' }}><br /></div>
                                                         <div style={{ lineHeight: '1.5' }}>
                                                           <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                                                             <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                                                               <span data-custom-class="body_text">
                                                                 In some regions (like
                                                                  <BDT className="block-component" />
                                                                 the EEA, UK, Switzerland, and Canada
                                                                  <BDT className="block-component" />
                                                                 ), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; (iv) if applicable, to data portability; and (v) not to be subject to automated decision-making. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section
                                                                  <BDT className="block-component" />
                                                                 '
                                                                  <BDT className="else-block" />
                                                               </span>
                                                             </span>
                                                           </span>
                                                           <a data-custom-class="link" href="https://jobstream.uk/privacy-policy#contact"><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</span></span></span></a>
                                                           <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                                                             <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                                                               <span data-custom-class="body_text">
                                                                 <BDT className="block-component" />
                                                                 '
                                                                  <BDT className="else-block" />
                                                                 below.
                                                                </span>
                                                             </span>
                                                           </span>
                                                         </div>
                                                         <div style={{ lineHeight: '1.5' }}><br /></div>
                                                         <div style={{ lineHeight: '1.5' }}>
                                                           <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                                                             <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                                                               <span data-custom-class="body_text">
                                                                 We will consider and act upon any request in accordance with applicable data protection laws.
                                                                  <BDT className="block-component" />
                                                               </span>
                                                             </span>
                                                           </span>
                                                         </div>
                                                         <div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}> </span></div>
                                                         <div style={{ lineHeight: '1.5' }}>
                                                           <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                                                             <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                                                               <span data-custom-class="body_text">
                                                                 If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your<span style={{ fontSize: '15px' }}><span style={{ color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text"><span style={{ color: 'rgb(48, 48, 241)' }}><span data-custom-class="body_text"><a data-custom-class="link" href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm" rel="noopener noreferrer" target="_blank"><span style={{ fontSize: '15px' }}>Member State data protection authority</span></a></span></span></span></span></span>
                                                                 {' '}
                                                                 or
 {' '}
                                                               </span>
                                                             </span>
                                                           </span>
                                                           <a href="https://ico.org.uk/make-a-complaint/data-protection-complaints/data-protection-complaints/" rel="noopener noreferrer" target="_blank"><span data-custom-class="link"><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text">UK data protection authority</span></span></span></span></a>
                                                           <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text">.</span></span></span>
                                                         </div>
                                                         <div style={{ lineHeight: '1.5' }}><br /></div>
                                                         <div style={{ lineHeight: '1.5' }}>
                                                           <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                                                             <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                                                               <span data-custom-class="body_text">
                                                                 If you are located in Switzerland, you may contact the<span style={{ fontSize: '15px' }}><span style={{ color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text"><span style={{ color: 'rgb(48, 48, 241)' }}><span data-custom-class="body_text"><span style={{ fontSize: '15px' }}><a data-custom-class="link" href="https://www.edoeb.admin.ch/edoeb/en/home.html" rel="noopener noreferrer" target="_blank">Federal Data Protection and Information Commissioner</a></span></span></span></span></span></span>
                                                                 .
 </span>
                                                             </span>
                                                           </span>
                                                         </div>
                                                         <div style={{ lineHeight: '1.5' }}><br /></div>
                                                         <div id="withdrawconsent" style={{ lineHeight: '1.5' }}>
                                                           <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                                                             <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                                                               <span data-custom-class="body_text">
                                                                 <strong><u>Withdrawing your consent:</u></strong>
                                                                 {' '}
                                                                 If we are relying on your consent to process your personal information,
                                                                  <BDT className="block-component" />
                                                                 which may be express and/or implied consent depending on the applicable law,
                                                                  <BDT className="statement-end-if-in-editor" />
                                                                 you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section
                                                                  <BDT className="block-component" />
                                                                 '
                                                                  <BDT className="else-block" />
                                                               </span>
                                                             </span>
                                                           </span>
                                                           <a data-custom-class="link" href="https://jobstream.uk/privacy-policy#contact"><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</span></span></span></a>
                                                           <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                                                             <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                                                               <span data-custom-class="body_text">
                                                                 <BDT className="block-component" />
                                                                 '
                                                                  <BDT className="else-block" />
                                                                 below
                                                                  <BDT className="block-component" />
                                                                 .
                                                                </span>
                                                             </span>
                                                           </span>
                                                         </div>
                                                         <div style={{ lineHeight: '1.5' }}><br /></div>
                                                         <div style={{ lineHeight: '1.5' }}>
                                                           <span style={{ fontSize: '15px' }}>
                                                             <span data-custom-class="body_text">
                                                               However, please note that this will not affect the lawfulness of the processing before its withdrawal nor,
                                                               <BDT className="block-component" />
                                                               when applicable law allows,
                                                               <BDT className="statement-end-if-in-editor" />
                                                               will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.
                                                               <BDT className="block-component" />
                                                             </span>
                                                           </span>
                                                         </div>
                                                         <div style={{ lineHeight: '1.5' }}><br /></div>
                                                         <div style={{ lineHeight: '1.5' }}>
                                                           <span style={{ fontSize: '15px' }}>
                                                             <span data-custom-class="body_text">
                                                               <strong><u>Opting out of marketing and promotional communications:</u></strong>
                                                               <strong><u> </u></strong>
                                                               You can unsubscribe from our marketing and promotional communications at any time by
                                                               <BDT className="block-component" />
                                                               clicking on the unsubscribe link in the emails that we send,
                                                               <BDT className="statement-end-if-in-editor" />
                                                               <BDT className="block-component" />
                                                               replying
                                                               <BDT className="block-component" />
                                                               'STOP' or 'UNSUBSCRIBE'
                                                               <BDT className="else-block" />
                                                               to the SMS messages that we send,
                                                               <BDT className="statement-end-if-in-editor" />
                                                               <BDT className="block-component" />
                                                               or by contacting us using the details provided in the section
                                                               <BDT className="block-component" />
                                                               '
                                                               <BDT className="else-block" />
                                                             </span>
                                                           </span>
                                                           <a data-custom-class="link" href="https://jobstream.uk/privacy-policy#contact"><span style={{ fontSize: '15px' }}><span data-custom-class="body_text">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</span></span></a>
                                                           <span style={{ fontSize: '15px' }}>
                                                             <span data-custom-class="body_text">
                                                               <BDT className="block-component" />
                                                               '
                                                               <BDT className="else-block" />
                                                               below. You will then be removed from the marketing lists. However, we may still communicate with you — for example, to send you service-related messages that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes.
                                                             </span>
                                                             <span data-custom-class="body_text">
                                                               <BDT className="statement-end-if-in-editor" />
                                                             </span>
                                                           </span>
                                                           <BDT className="block-component"><span style={{ fontSize: '15px' }}><span data-custom-class="body_text" /></span></BDT>
                                                         </div>
                                                         <div style={{ lineHeight: '1.5' }}><br /></div>
                                                         <div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px' }}><span data-custom-class="heading_2"><strong>Account Information</strong></span></span></div>
                                                         <div style={{ lineHeight: '1.5' }}><br /></div>
                                                         <div style={{ lineHeight: '1.5' }}>
                                                           <span data-custom-class="body_text">
                                                             <span style={{ fontSize: '15px' }}>
                                                               If you would at any time like to review or change the information in your account or terminate your account, you can:
                                                               <BDT className="forloop-component" />
                                                             </span>
                                                           </span>
                                                         </div>
                                                         <ul>
                                                           <li style={{ lineHeight: '1.5' }}>
                                                             <span data-custom-class="body_text">
                                                               <span style={{ fontSize: '15px' }}>
                                                                 <BDT className="question">Contact us using the contact information provided.</BDT>
                                                               </span>
                                                             </span>
                                                           </li>
                                                         </ul>
                                                         <div style={{ lineHeight: '1.5' }}>
                                                           <span data-custom-class="body_text">
                                                             <span style={{ fontSize: '15px' }}>
                                                               <BDT className="forloop-component" />
                                                             </span>
                                                           </span>
                                                         </div>
                                                         <div style={{ lineHeight: '1.5' }}>
                                                           <span style={{ fontSize: '15px' }}><span data-custom-class="body_text">Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.</span></span>
                                                           <BDT className="statement-end-if-in-editor">
                                                             <span style={{ fontSize: '15px' }}><span data-custom-class="body_text" /></span>
                                                             {' '}
                                                           </BDT>
                                                           <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                                                             <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                                                               <span data-custom-class="body_text">
                                                                 <span style={{ fontSize: '15px' }}>
                                                   <span style={{ color: 'rgb(89, 89, 89)' }}>
             <span style={{ fontSize: '15px' }}>
                                                                        <span style={{ color: 'rgb(89, 89, 89)' }}>
                                                                          <span data-custom-class="body_text">
                                                                            <span style={{ fontSize: '15px' }}>
                                                                              <span style={{ color: 'rgb(89, 89, 89)' }}>
                                                                                <BDT className="block-component" />
                                                                              </span>
                                                                            </span>
                                                                          </span>
                                                                        </span>
                                                                      </span>
           </span>
                                                 </span>
                                                               </span>
                                                             </span>
                                                           </span>
                                                           <BDT className="block-component"><span style={{ fontSize: '15px' }}><span data-custom-class="body_text" /></span></BDT>
                                                         </div>
                                                         &lt;&gt;
                                                         <div style={{ lineHeight: '1.5' }}><br /></div>
                                                         <div style={{ lineHeight: '1.5' }}>
                                                           <span data-custom-class="body_text">
                                                             <span style={{ fontSize: '15px' }}>
                                                               If you have questions or comments about your privacy rights, you may email us at
                                                               <BDT className="question">privacy@j4a.uk</BDT>
                                                               .
                                                             </span>
                                                           </span>
                                                           <BDT className="statement-end-if-in-editor"><span style={{ fontSize: '15px' }}><span data-custom-class="body_text" /></span></BDT>
                                                         </div>
                                                         <div style={{ lineHeight: '1.5' }}><br /></div>
                                                         <div id="DNT" style={{ lineHeight: '1.5' }}><span style={{ color: 'rgb(127, 127, 127)' }}><span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span id="control" style={{ color: 'rgb(0, 0, 0)' }}><strong><span data-custom-class="heading_1">10. CONTROLS FOR DO-NOT-TRACK FEATURES</span></strong></span></span></span></span></span></div>
                                                         <div style={{ lineHeight: '1.5' }}><br /></div>
                                                         <div style={{ lineHeight: '1.5' }}>
                                                           <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                                                             <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                                                               <span data-custom-class="body_text">
                                                                 Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (
                                                                  <BDT className="block-component" />
                                                                 'DNT'
                                                                  <BDT className="else-block" />
                                                                 ) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for
                                                                  <BDT className="block-component" />
                                                                 recognising
                                                                  <BDT className="else-block" />
                                                                 and implementing DNT signals has been
                                                                  <BDT className="block-component" />
                                                                 finalised
                                                                  <BDT className="else-block" />
                                                                 . As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.
                                                                  <BDT className="block-component" />
                                                               </span>
                                                             </span>
                                                           </span>
                                                         </div>
                                                         <div style={{ lineHeight: '1.5' }}><br /></div>
                                                         <div id="uslaws" style={{ lineHeight: '1.5' }}><span style={{ color: 'rgb(127, 127, 127)' }}><span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span id="control" style={{ color: 'rgb(0, 0, 0)' }}><strong><span data-custom-class="heading_1">11. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</span></strong></span></span></span></span></span></div>
                                                         <div style={{ lineHeight: '1.5' }}><br /></div>
                                                         <div style={{ lineHeight: '1.5' }}>
                                                           <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                                                             <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                                                               <span data-custom-class="body_text">
                                                                 <strong><em>In Short: </em></strong>
                                                                 <em>
                                                   If you are a resident of
                                                                    <BDT className="forloop-component" />
                                                   <BDT className="block-component" />
                                                   <BDT className="forloop-component" />
                                                   California
                                                                    <BDT className="forloop-component" />
                                                   <BDT className="forloop-component" />
                                                   <BDT className="forloop-component" />
                                                   <BDT className="forloop-component" />
                                                   <BDT className="block-component" />
                                                   <BDT className="forloop-component" />
                                                   <BDT className="block-component" />
                                                   <BDT className="forloop-component" />
                                                   <BDT className="forloop-component" />
                                                   , Colorado
                                                                    <BDT className="forloop-component" />
                                                   <BDT className="forloop-component" />
                                                   <BDT className="statement-end-if-in-editor" />
                                                   <BDT className="forloop-component" />
                                                   <BDT className="block-component" />
                                                   <BDT className="forloop-component" />
                                                   <BDT className="forloop-component">, Connecticut</BDT>
                                                   <BDT className="forloop-component" />
                                                   <BDT className="statement-end-if-in-editor" />
                                                   <BDT className="forloop-component" />
                                                   <BDT className="block-component" />
                                                   <BDT className="forloop-component" />
                                                   <BDT className="forloop-component">, Utah</BDT>
                                                   <BDT className="forloop-component" />
                                                   <BDT className="statement-end-if-in-editor" />
                                                   <BDT className="forloop-component" />
                                                   <BDT className="block-component" />
                                                   <BDT className="forloop-component" />
                                                   <BDT className="forloop-component" />
                                                   <BDT className="forloop-component" />
                                                   <BDT className="forloop-component" />
                                                   or Virginia
                                                                    <BDT className="forloop-component" />
                                                   <BDT className="else-block" />
                                                   <BDT className="forloop-component" />
                                                   , you are granted specific rights regarding access to your personal information.
                                                                  </em>
                                                               </span>
                                                             </span>
                                                           </span>
                                                         </div>
                                                         <div style={{ lineHeight: '1.5' }}><br /></div>
                                                         <div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text"><strong>What categories of personal information do we collect?</strong></span></span></span></div>
                                                         <div style={{ lineHeight: '1.5' }}><br /></div>
                                                         <div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text">We have collected the following categories of personal information in the past twelve (12) months:</span></span></span></div>
                                                         <div style={{ lineHeight: '1.5' }}><br /></div>
                                                         <table style={{ width: '100%' }}>
                                                           <tbody>
                                                             <tr>
                                                               <td style={{
                                                                 width: '33.8274%', borderLeft: '1px solid black', borderRight: '1px solid black', borderTop: '1px solid black',
                                                               }}
                                                               ><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text"><strong>Category</strong></span></span></span>
                                                               </td>
                                                               <td style={{ width: '51.4385%', borderTop: '1px solid black', borderRight: '1px solid black' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text"><strong>Examples</strong></span></span></span></td>
                                                               <td style={{
                                                                 width: '14.9084%', borderRight: '1px solid black', borderTop: '1px solid black', textAlign: 'center',
                                                               }}
                                                               ><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text"><strong>Collected</strong></span></span></span>
                                                               </td>
                                                             </tr>
                                                             <tr>
                                                               <td style={{
                                                                 width: '33.8274%', borderLeft: '1px solid black', borderRight: '1px solid black', borderTop: '1px solid black',
                                                               }}
                                                               >
                                                                 <div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text">A. Identifiers</span></span></span></div>
                                                               </td>
                                                               <td style={{ width: '51.4385%', borderTop: '1px solid black', borderRight: '1px solid black' }}>
                                                                 <div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text">Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name</span></span></span></div>
                                                               </td>
                                                               <td style={{
                                                                 width: '14.9084%', textAlign: 'center', verticalAlign: 'middle', borderRight: '1px solid black', borderTop: '1px solid black',
                                                               }}
                                                               >
                                                                 <div style={{ lineHeight: '1.5' }}><br /></div>
                                                                 <div style={{ lineHeight: '1.5' }}>
                                                   <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
               <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
               <span data-custom-class="body_text">
                                                                          <BDT className="block-component">
                                                                            <BDT className="block-component" />
                                                                          </BDT>
                                                                          YES
                                                                          <BDT className="else-block">
                                                                            <BDT className="block-component" />
                                                                          </BDT>
                                                                        </span>
             </span>
             </span>
                                                 </div>
                                                                 <div style={{ lineHeight: '1.5' }}><br /></div>
                                                               </td>
                                                             </tr>
                                                           </tbody>
                                                         </table>
                                                         <div style={{ lineHeight: '1.5' }}>
                                                           <BDT className="block-component" />
                                                         </div>
                                                         <table style={{ width: '100%' }}>
                                                           <tbody>
                                                             <tr>
                                                               <td style={{
                                                                 width: '33.8274%', borderLeft: '1px solid black', borderRight: '1px solid black', borderTop: '1px solid black',
                                                               }}
                                                               >
                                                                 <div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text">B. Personal information as defined in the California Customer Records statute</span></span></span></div>
                                                               </td>
                                                               <td style={{ width: '51.4385%', borderRight: '1px solid black', borderTop: '1px solid black' }}>
                                                                 <div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text">Name, contact information, education, employment, employment history, and financial information</span></span></span></div>
                                                               </td>
                                                               <td style={{
                                                                 width: '14.9084%', textAlign: 'center', borderRight: '1px solid black', borderTop: '1px solid black',
                                                               }}
                                                               >
                                                                 <div style={{ lineHeight: '1.5' }}><br /></div>
                                                                 <div style={{ lineHeight: '1.5' }}>
                                                   <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
               <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
               <span data-custom-class="body_text">
                                                                          <BDT className="forloop-component">
                                                                            <BDT className="block-component">
                                                                              <BDT className="block-component" />
                                                                              YES
                                                                              <BDT className="block-component" />
                                                                            </BDT>
                                                                          </BDT>
                                                                        </span>
             </span>
             </span>
                                                 </div>
                                                                 <div style={{ lineHeight: '1.5' }}><br /></div>
                                                               </td>
                                                             </tr>
                                                           </tbody>
                                                         </table>
                                                         <div style={{ lineHeight: '1.5' }}>
                                                           <BDT className="block-component" />
                                                         </div>
                                                         <table style={{ width: '100%' }}>
                                                           <tbody>
                                                             <tr>
                                                               <td style={{
                                                                 width: '33.8274%', borderLeft: '1px solid black', borderRight: '1px solid black', borderTop: '1px solid black',
                                                               }}
                                                               >
                                                                 <div style={{ lineHeight: '1.5' }}>
                                                   <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
               <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
               <span data-custom-class="body_text">
                                                                          <BDT className="block-component" />
                                                                          C
                                                                          <BDT className="else-block" />
                                                                          . Protected classification characteristics under state or federal law
                                                                        </span>
             </span>
             </span>
                                                 </div>
                                                               </td>
                                                               <td style={{ width: '51.4385%', borderRight: '1px solid black', borderTop: '1px solid black' }}>
                                                                 <div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text">Gender and date of birth</span></span></span></div>
                                                               </td>
                                                               <td style={{
                                                                 width: '14.9084%', textAlign: 'center', borderRight: '1px solid black', borderTop: '1px solid black',
                                                               }}
                                                               >
                                                                 <div style={{ lineHeight: '1.5' }}><br /></div>
                                                                 <div data-custom-class="body_text" style={{ lineHeight: '1.5' }}>
                                                   <BDT className="forloop-component">
               <span data-custom-class="body_text">
               <BDT className="block-component" />
               <BDT className="block-component" />
               YES
                                                                        <BDT className="else-block" />
               <BDT className="block-component" />
             </span>
             </BDT>
                                                 </div>
                                                                 <div style={{ lineHeight: '1.5' }}><br /></div>
                                                               </td>
                                                             </tr>
                                                             <tr>
                                                               <td style={{
                                                                 width: '33.8274%', borderLeft: '1px solid black', borderRight: '1px solid black', borderTop: '1px solid black',
                                                               }}
                                                               >
                                                                 <div style={{ lineHeight: '1.5' }}>
                                                   <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
               <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
               <span data-custom-class="body_text">
                                                                          <BDT className="block-component" />
                                                                          D
                                                                          <BDT className="else-block" />
                                                                          . Commercial information
                                                                        </span>
             </span>
             </span>
                                                 </div>
                                                               </td>
                                                               <td style={{ width: '51.4385%', borderRight: '1px solid black', borderTop: '1px solid black' }}>
                                                                 <div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text">Transaction information, purchase history, financial details, and payment information</span></span></span></div>
                                                               </td>
                                                               <td style={{
                                                                 width: '14.9084%', textAlign: 'center', borderRight: '1px solid black', borderTop: '1px solid black',
                                                               }}
                                                               >
                                                                 <div style={{ lineHeight: '1.5' }}><br /></div>
                                                                 <div data-custom-class="body_text" style={{ lineHeight: '1.5' }}>
                                                   <BDT className="forloop-component">
               <span data-custom-class="body_text">
               <BDT className="block-component" />
               <BDT className="block-component" />
               YES
                                                                        <BDT className="else-block">
                                                                          <BDT className="block-component" />
                                                                        </BDT>
             </span>
             </BDT>
                                                 </div>
                                                                 <div style={{ lineHeight: '1.5' }}><br /></div>
                                                               </td>
                                                             </tr>
                                                             <tr>
                                                               <td style={{
                                                                 width: '33.8274%', borderLeft: '1px solid black', borderRight: '1px solid black', borderTop: '1px solid black',
                                                               }}
                                                               >
                                                                 <div style={{ lineHeight: '1.5' }}>
                                                   <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
               <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
               <span data-custom-class="body_text">
                                                                          <BDT className="block-component" />
                                                                          E
                                                                          <BDT className="else-block" />
                                                                          . Biometric information
                                                                        </span>
             </span>
             </span>
                                                 </div>
                                                               </td>
                                                               <td style={{ width: '51.4385%', borderRight: '1px solid black', borderTop: '1px solid black' }}>
                                                                 <div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text">Fingerprints and voiceprints</span></span></span></div>
                                                               </td>
                                                               <td style={{
                                                                 width: '14.9084%', textAlign: 'center', borderRight: '1px solid black', borderTop: '1px solid black',
                                                               }}
                                                               >
                                                                 <div style={{ lineHeight: '1.5' }}><br /></div>
                                                                 <div data-custom-class="body_text" style={{ lineHeight: '1.5' }}>
                                                   <BDT className="forloop-component">
               <span data-custom-class="body_text">
               <BDT className="block-component">
                                                                          <BDT className="block-component">NO</BDT>
                                                                          <BDT className="statement-end-if-in-editor" />
                                                                          <BDT className="block-component" />
                                                                        </BDT>
             </span>
             </BDT>
                                                 </div>
                                                                 <div style={{ lineHeight: '1.5' }}><br /></div>
                                                               </td>
                                                             </tr>
                                                             <tr>
                                                               <td style={{
                                                                 width: '33.8274%', borderLeft: '1px solid black', borderRight: '1px solid black', borderTop: '1px solid black',
                                                               }}
                                                               >
                                                                 <div style={{ lineHeight: '1.5' }}>
                                                   <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
               <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
               <span data-custom-class="body_text">
   <BDT className="block-component" />
 F
 <BDT className="else-block" />
 . Internet or other similar network activity
 </span>
             </span>
             </span>
                                                 </div>
                                                               </td>
                                                               <td style={{ width: '51.4385%', borderRight: '1px solid black', borderTop: '1px solid black' }}>
                                                                 <div style={{ lineHeight: '1.5' }}>
                                                   <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
               <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
               <span data-custom-class="body_text">
   Browsing history, search history, online<BDT className="block-component" />
   behaviour<BDT className="else-block" />
   , interest data, and interactions with our and other websites, applications, systems, and advertisements
 </span>
             </span>
             </span>
                                                 </div>
                                                               </td>
                                                               <td style={{
                                                                 width: '14.9084%', textAlign: 'center', borderRight: '1px solid black', borderTop: '1px solid black',
                                                               }}
                                                               >
                                                                 <div style={{ lineHeight: '1.5' }}><br /></div>
                                                                 <div data-custom-class="body_text" style={{ lineHeight: '1.5' }}>
                                                   <BDT className="forloop-component">
               <span data-custom-class="body_text">
               <BDT className="block-component" />
               <BDT className="block-component" />
               NO
 <BDT className="statement-end-if-in-editor" />
               <BDT className="block-component" />
             </span>
             </BDT>
                                                 </div>
                                                                 <div style={{ lineHeight: '1.5' }}><br /></div>
                                                               </td>
                                                             </tr>
                                                             <tr>
                                                               <td style={{
                                                                 width: '33.8274%', borderLeft: '1px solid black', borderRight: '1px solid black', borderTop: '1px solid black',
                                                               }}
                                                               >
                                                                 <div style={{ lineHeight: '1.5' }}>
                                                   <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
               <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
 <span data-custom-class="body_text">
 <BDT className="block-component" />G
 <BDT className="else-block" />. Geolocation data</span>
 </span>
             </span>
                                                 </div>
                                                               </td>
                                                               <td style={{ width: '51.4385%', borderRight: '1px solid black', borderTop: '1px solid black' }}><div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text">Device location</span></span></span></div></td>
                                                               <td style={{
                                                                 width: '14.9084%', textAlign: 'center', borderRight: '1px solid black', borderTop: '1px solid black',
                                                               }}
                                                               >
                                                                 <div style={{ lineHeight: '1.5' }}><br /></div>
                                                                 <div data-custom-class="body_text" style={{ lineHeight: '1.5' }}>
                                                   <BDT className="forloop-component">
               <span data-custom-class="body_text">
   <BDT className="block-component" />
 <BDT className="block-component" />
 NO
 <BDT className="statement-end-if-in-editor" />
   <BDT className="block-component" />
 </span>
             </BDT>
                                                 </div>
                                                                 <div style={{ lineHeight: '1.5' }}><br /></div>
                                                               </td>
                                                             </tr>
                                                             <tr>
                                                               <td style={{
                                                                 width: '33.8274%', borderLeft: '1px solid black', borderRight: '1px solid black', borderTop: '1px solid black',
                                                               }}
                                                               >
                                                                 <div style={{ lineHeight: '1.5' }}>
                                                   <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
               <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
 <span data-custom-class="body_text">
 <BDT className="block-component" />H
 <BDT className="else-block" />. Audio, electronic, visual, thermal, olfactory, or similar information</span>
 </span>
             </span>
                                                 </div>
                                                               </td>
                                                               <td style={{ width: '51.4385%', borderRight: '1px solid black', borderTop: '1px solid black' }}><div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text">Images and audio, video or call recordings created in connection with our business activities</span></span></span></div></td>
                                                               <td style={{
                                                                 width: '14.9084%', textAlign: 'center', borderRight: '1px solid black', borderTop: '1px solid black',
                                                               }}
                                                               >
                                                                 <div style={{ lineHeight: '1.5' }}><br /></div>
                                                                 <div data-custom-class="body_text" style={{ lineHeight: '1.5' }}>
                                                   <BDT className="forloop-component">
               <span data-custom-class="body_text">
   <BDT className="block-component" />
 <BDT className="block-component" />
 NO
 <BDT className="statement-end-if-in-editor" />
   <BDT className="block-component" />
 </span>
             </BDT>
                                                 </div>
                                                                 <div style={{ lineHeight: '1.5' }}><br /></div>
                                                               </td>
                                                             </tr>
                                                             <tr>
                                                               <td style={{
                                                                 width: '33.8274%', borderLeft: '1px solid black', borderRight: '1px solid black', borderTop: '1px solid black',
                                                               }}
                                                               >
                                                                 <div style={{ lineHeight: '1.5' }}>
                                                   <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
               <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
 <span data-custom-class="body_text">
 <BDT className="block-component" />I
 <BDT className="else-block" />. Professional or employment-related information</span>
 </span>
             </span>
                                                 </div>
                                                               </td>
                                                               <td style={{ width: '51.4385%', borderRight: '1px solid black', borderTop: '1px solid black' }}><div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text">Business contact details in order to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us</span></span></span></div></td>
                                                               <td style={{
                                                                 width: '14.9084%', textAlign: 'center', borderRight: '1px solid black', borderTop: '1px solid black',
                                                               }}
                                                               >
                                                                 <div style={{ lineHeight: '1.5' }}><br /></div>
                                                                 <div data-custom-class="body_text" style={{ lineHeight: '1.5' }}>
                                                   <BDT className="forloop-component">
               <span data-custom-class="body_text">
   <BDT className="block-component" />
 <BDT className="block-component" />
 YES
 <BDT className="else-block" />
   <BDT className="block-component" />
 </span>
             </BDT>
                                                 </div>
                                                                 <div style={{ lineHeight: '1.5' }}><br /></div>
                                                               </td>
                                                             </tr>
                                                             <tr>
                                                               <td style={{
                                                                 borderLeft: '1px solid black', borderRight: '1px solid black', borderTop: '1px solid black', width: '33.8274%',
                                                               }}
                                                               >
                                                                 <div style={{ lineHeight: '1.5' }}>
                                                   <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
               <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
 <span data-custom-class="body_text">
 <BDT className="block-component" />J
 <BDT className="else-block" />. Education Information</span>
 </span>
             </span>
                                                 </div>
                                                               </td>
                                                               <td style={{ borderRight: '1px solid black', borderTop: '1px solid black', width: '51.4385%' }}><div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text">Student records and directory information</span></span></span></div></td>
                                                               <td style={{
                                                                 textAlign: 'center', borderRight: '1px solid black', borderTop: '1px solid black', width: '14.9084%',
                                                               }}
                                                               >
                                                                 <div style={{ lineHeight: '1.5' }}><br /></div>
                                                                 <div data-custom-class="body_text" style={{ lineHeight: '1.5' }}>
                                                   <BDT className="forloop-component">
               <span data-custom-class="body_text">
   <BDT className="block-component" />
 <BDT className="block-component" />
 NO
 <BDT className="statement-end-if-in-editor" />
   <BDT className="block-component" />
 </span>
             </BDT>
                                                 </div>
                                                                 <div style={{ lineHeight: '1.5' }}><br /></div>
                                                               </td>
                                                             </tr>
                                                             <tr>
                                                               <td style={{
                                                                 borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', width: '33.8274%',
                                                               }}
                                                               >
                                                                 <div style={{ lineHeight: '1.5' }}>
                                                   <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
               <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
 <span data-custom-class="body_text">
 <BDT className="block-component" />K
 <BDT className="else-block" />. Inferences drawn from collected personal information</span>
 </span>
             </span>
                                                 </div>
                                                               </td>
                                                               <td style={{
                                                                 borderBottom: '1px solid black', borderTop: '1px solid black', borderRight: '1px solid black', width: '51.4385%',
                                                               }}
                                                               ><div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text">Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual’s preferences and characteristics</span></span></span></div>
                                                               </td>
                                                               <td style={{
                                                                 textAlign: 'center', borderRight: '1px solid black', borderBottom: '1px solid black', borderTop: '1px solid black', width: '14.9084%',
                                                               }}
                                                               >
                                                                 <div style={{ lineHeight: '1.5' }}><br /></div>
                                                                 <div data-custom-class="body_text" style={{ lineHeight: '1.5' }}>
                                                   <span data-custom-class="body_text">
               <BDT className="block-component" />
               NO
 <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text"><span style={{ color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text"><BDT className="statement-end-if-in-editor" /></span></span></span></span></span>
             </span>
                                                 </div>
                                                                 <div style={{ lineHeight: '1.5' }}><br /></div>
                                                               </td>
                                                             </tr>
                                                             <tr>
                                                               <td style={{
                                                                 borderLeft: '1px solid black', borderRight: '1px solid black', borderBottom: '1px solid black', lineHeight: '1.5',
                                                               }}
                                                               >
                                                                 <span data-custom-class="body_text">
                                                   <BDT className="block-component" />
                                                   L
 <BDT className="else-block" />
                                                   . Sensitive personal Information
 </span>
                                                               </td>
                                                               <td style={{ borderRight: '1px solid black', borderBottom: '1px solid black', lineHeight: '1.5' }}><BDT className="block-component"><span data-custom-class="body_text" /></BDT></td>
                                                               <td style={{ borderRight: '1px solid black', borderBottom: '1px solid black' }}>
                                                                 <div data-empty="true" style={{ textAlign: 'center' }}><br /></div>
                                                                 <div data-custom-class="body_text" data-empty="true" style={{ textAlign: 'center', lineHeight: '1.5' }}>
                                                   <BDT className="block-component"><span data-custom-class="body_text" /></BDT>
                                                   NO
 <BDT className="statement-end-if-in-editor"><span data-custom-class="body_text" /></BDT>
                                                 </div>
                                                                 <div data-empty="true" style={{ textAlign: 'center' }}><br /></div>
                                                               </td>
                                                             </tr>
                                                           </tbody>
                                                         </table>
                                                         <div style={{ lineHeight: '1.5' }}><br /></div>
                                                         <div style={{ lineHeight: '1.5' }}>
                                                           <BDT className="block-component"><span data-custom-class="body_text" /></BDT>
                                                           <span data-custom-class="body_text">
                                                             We will use and retain the collected personal information as needed to provide the Services or for:
                                                             <BDT className="block-component" />
                                                           </span>
                                                         </div>
                                                         <ul>
                                                           <li style={{ lineHeight: '1.5' }}>
                                                             <span data-custom-class="body_text">
                                                               Category A -
 <BDT className="question">As long as the user has an account with us</BDT>
                                                               <BDT className="statement-end-if-in-editor" />
                                                             </span>
                                                           </li>
                                                         </ul>
                                                         <div style={{ lineHeight: '1.5' }}><span data-custom-class="body_text"><BDT className="block-component" /></span></div>
                                                         <ul>
                                                           <li style={{ lineHeight: '1.5' }}>
                                                             <span data-custom-class="body_text">
                                                               Category B -
 <BDT className="question">As long as the user has an account with us</BDT>
                                                               <BDT className="statement-end-if-in-editor" />
                                                             </span>
                                                           </li>
                                                         </ul>
                                                         <div style={{ lineHeight: '1.5' }}><span data-custom-class="body_text"><BDT className="block-component" /></span></div>
                                                         <ul>
                                                           <li style={{ lineHeight: '1.5' }}>
                                                             <span data-custom-class="body_text">
                                                               Category
 <BDT className="block-component" />
                                                               C
 <BDT className="else-block" />
                                                               {' '}
                                                               -
 <BDT className="question">As long as the user has an account with us</BDT>
                                                               <BDT className="statement-end-if-in-editor" />
                                                             </span>
                                                           </li>
                                                         </ul>
                                                         <div style={{ lineHeight: '1.5' }}><span data-custom-class="body_text"><BDT className="block-component" /></span></div>
                                                         <ul>
                                                           <li style={{ lineHeight: '1.5' }}>
                                                             <span data-custom-class="body_text">
                                                               Category
 <BDT className="block-component" />
                                                               D
 <BDT className="else-block" />
                                                               {' '}
                                                               -
 <BDT className="question">As long as the user has an account with us</BDT>
                                                               <BDT className="statement-end-if-in-editor" />
                                                             </span>
                                                           </li>
                                                         </ul>
                                                         <div style={{ lineHeight: '1.5' }}>
                                                           <span data-custom-class="body_text"><BDT className="block-component" /></span>
                                                           {' '}
                                                           <div style={{ lineHeight: '1.5' }}>
                                                             <span data-custom-class="body_text"><BDT className="block-component" /></span>
                                                             {' '}
                                                             <div style={{ lineHeight: '1.5' }}>
                                                               <span data-custom-class="body_text"><BDT className="block-component" /></span>
                                                               {' '}
                                                               <div style={{ lineHeight: '1.5' }}>
                                                                 <span data-custom-class="body_text"><BDT className="block-component" /></span>
                                                                 &lt;&gt;
 <div style={{ lineHeight: '1.5' }}><span data-custom-class="body_text"><BDT className="block-component" /></span></div>
                                                                 <ul>
                                                   <li style={{ lineHeight: '1.5' }}>
 <span data-custom-class="body_text">
 Category<BDT className="block-component" />
 I<BDT className="else-block" />
 {' '}
 -<BDT className="question">As long as the user has an account with us</BDT>
 <BDT className="statement-end-if-in-editor" />
 </span>
 </li>
                                                 </ul>
                                                                 <div style={{ lineHeight: '1.5' }}>
                                                   <span data-custom-class="body_text"><BDT className="block-component" /></span>
                                                   {' '}
                                                   <div style={{ lineHeight: '1.5' }}>
               <span data-custom-class="body_text"><BDT className="block-component" /></span>
               {' '}
               <div style={{ lineHeight: '1.5' }}>
 <span data-custom-class="body_text"><BDT className="block-component" /></span><BDT className="statement-end-if-in-editor"><span data-custom-class="body_text" /></BDT>
 &lt;&gt;<div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text"><BDT className="block-component" /></span></span></span></div>
 <div style={{lineHeight: '1.5'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-class="body_text">We may also collect other personal information outside of these categories through instances where you interact with us in person, online, or by phone or mail in the context of:<span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-class="body_text"><span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}><span data-custom-class="body_text"><BDT className="block-component" /></span></span></span></span></span></span></span></span></div><ul><li style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
 <span data-custom-class="body_text">Receiving help through our customer support channels;</span><span data-custom-class="body_text"><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text"><span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}><span data-custom-class="body_text"><span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}><span data-custom-class="body_text"><span style={{ fontSize: '15px' }}><span style={{ color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text"><BDT className="statement-end-if-in-editor" /></span></span></span></span></span></span></span></span></span></span></span></span></span></li></ul>
 <div><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-class="body_text"><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-class="body_text"><span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}><span data-custom-class="body_text"><BDT className="block-component" /></span></span></span></span></span></span></span></span></div><ul><li style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
 <span data-custom-class="body_text">Participation in customer surveys or contests; and</span><span data-custom-class="body_text"><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text"><span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}><span data-custom-class="body_text"><span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}><span data-custom-class="body_text"><span style={{ fontSize: '15px' }}><span style={{ color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text"><BDT className="statement-end-if-in-editor" /></span></span></span></span></span></span></span></span></span></span></span></span></span></li></ul>
 <div><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-class="body_text"><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-class="body_text"><span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}><span data-custom-class="body_text"><BDT className="block-component" /></span></span></span></span></span></span></span></span></div><ul><li style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
 <span data-custom-class="body_text">Facilitation in the delivery of our Services and to respond to your inquiries.</span><span data-custom-class="body_text"><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text"><span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}><span data-custom-class="body_text"><span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}><span data-custom-class="body_text"><span style={{ fontSize: '15px' }}><span style={{ color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text"><BDT className="statement-end-if-in-editor" /></span></span></span></span></span></span></span></span></span></span></span></span></span></li></ul>
 <div style={{lineHeight: '1.5'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-class="body_text"><strong>How do we use and share your personal information?</strong></span></span></span></div><div style={{ lineHeight: '1.5' }}><br /></div>
 <div style={{lineHeight: '1.5'}}><span data-custom-class="body_text" style={{fontSize: '15px'}}>Learn about how we use your personal information in the section, <BDT className="block-component" />'<BDT className="else-block" /></span><a href="https://jobstream.uk/privacy-policy#infouse"><span data-custom-class="link" style={{fontSize: '15px'}}>HOW DO WE PROCESS YOUR INFORMATION?</span></a><span data-custom-class="body_text" style={{fontSize: '15px'}}><BDT className="block-component" />'<BDT className="else-block" /></span></div>&lt;&gt;
 <div style={{lineHeight: '1.5'}}><br /></div><div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text"><span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}><span data-custom-class="body_text"><BDT className="block-component" /></span></span></span></span></span></div>
 &lt;&gt;<div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text"><strong>Will your information be shared with anyone else?</strong></span></span></span></div>
 <div style={{lineHeight: '1.5'}}><br /></div><div style={{ lineHeight: '1.5' }}>
 <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-class="body_text">We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Learn more about how we disclose personal information to in the section, <BDT className="block-component" />'<BDT className="else-block" /></span></span></span><a href="https://jobstream.uk/privacy-policy#whoshare"><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="link">WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</span></span></span></a>
 <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-class="body_text"><BDT className="block-component" />'<BDT className="else-block" /></span></span></span>
 </div>
 <div style={{lineHeight: '1.5'}}><br /></div><div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text">
 We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be<BDT className="block-component" />
 'selling'<BDT className="else-block" />
 {' '}
 of your personal information.<span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}><span data-custom-class="body_text"><BDT className="block-component" /></span></span></span></span></span></div>
 <div style={{lineHeight: '1.5'}}><br /></div><div style={{ lineHeight: '1.5' }}>
 <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-class="body_text">We have not disclosed, sold, or shared any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months. We<span style={{color: 'rgb(89, 89, 89)'}}> </span>will not sell or share personal information in the future belonging to website visitors, users, and other consumers.<span style={{color: 'rgb(89, 89, 89)'}}><span data-custom-class="body_text"><span style={{color: 'rgb(89, 89, 89)'}}><span data-custom-class="body_text"><span style={{color: 'rgb(89, 89, 89)'}}><span data-custom-class="body_text"><BDT className="statement-end-if-in-editor" /></span></span></span></span><BDT className="block-component" /></span></span></span></span></span> 
 {' '}
 <span data-custom-class="body_text"><span style={{color: 'rgb(0, 0, 0)'}}><span data-custom-class="body_text"><BDT className="block-component" /></span></span></span> 
 {' '}
 <BDT className="block-component" />
 </div>
 &lt;&gt;<div style={{ lineHeight: '1.5' }}><br /></div>
 <div style={{lineHeight: '1.5'}}><strong><span data-custom-class="heading_2" style={{fontSize: '15px'}}>California Residents</span></strong></div><div style={{ lineHeight: '1.5' }}><br /></div>
 <div style={{lineHeight: '1.5'}}><span data-custom-class="body_text" style={{fontSize: '15px'}}>California Civil Code Section 1798.83, also known as the <BDT className="block-component" />'Shine The Light'<BDT className="else-block" /> law permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.</span></div><div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px' }}><span data-custom-class="body_text"><br /></span></span></div>
 <div style={{lineHeight: '1.5'}}><span data-custom-class="body_text" style={{fontSize: '15px'}}>If you are under 18 years of age, reside in California, and have a registered account with the Services, you have the right to request removal of unwanted data that you publicly post on the Services. To request removal of such data, please contact us using the contact information provided below and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Services, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g.<BDT className="block-component" /> backups, etc.).</span></div><div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px' }}><br /></span></div>
 <div style={{lineHeight: '1.5'}}><span style={{fontSize: '15px'}}><span data-custom-class="body_text"><strong><u>CCPA Privacy Notice</u></strong></span></span></div><div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px' }}><span data-custom-class="body_text"><br /></span></span></div>
 <div style={{lineHeight: '1.5'}}><span style={{fontSize: '15px'}}><span data-custom-class="body_text">This section applies only to California residents. Under the California Consumer Privacy Act (CCPA), you have the rights listed below.</span></span></div><div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px' }}><span data-custom-class="body_text"><br /></span></span></div>
 <div style={{lineHeight: '1.5'}}><span style={{fontSize: '15px'}}><span data-custom-class="body_text">The California Code of Regulations defines a <BDT className="block-component" />'residents'<BDT className="else-block" /> as:</span></span></div><div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px' }}><span data-custom-class="body_text"><br /></span></span></div>
 <div style={{marginLeft: '20px', lineHeight: '1.5'}}><span style={{fontSize: '15px'}}><span data-custom-class="body_text">(1) every individual who is in the State of California for other than a temporary or transitory purpose and</span></span></div><div style={{ marginLeft: '20px', lineHeight: '1.5' }}><span style={{ fontSize: '15px' }}><span data-custom-class="body_text">(2) every individual who is domiciled in the State of California who is outside the State of California for a temporary or transitory purpose</span></span></div>
 <div style={{lineHeight: '1.5'}}><span style={{fontSize: '15px'}}><span data-custom-class="body_text"><br /></span></span></div><div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px' }}><span data-custom-class="body_text">
 All other individuals are defined as<BDT className="block-component" />
 'non-residents'.<BDT className="else-block" /></span></span></div>
 <div style={{lineHeight: '1.5'}}><span style={{fontSize: '15px'}}><span data-custom-class="body_text"><br /></span></span></div><div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px' }}><span data-custom-class="body_text">
 If this definition of<BDT className="block-component" />
 'resident'<BDT className="else-block" />
 {' '}
 applies to you, we must adhere to certain rights and obligations regarding your personal information.
 </span></span></div>
 <div style={{lineHeight: '1.5'}}><br /></div><div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text"><strong>Your rights with respect to your personal data</strong></span></span></span></div>
 <div style={{lineHeight: '1.5'}}><br /></div><div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text"><u>Right to request deletion of the data — Request to delete</u></span></span></span></div>
 <div style={{lineHeight: '1.5'}}><br /></div><div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text">You can ask for the deletion of your personal information. If you ask us to delete your personal information, we will respect your request and delete your personal information, subject to certain exceptions provided by law, such as (but not limited to) the exercise by another consumer of his or her right to free speech, our compliance requirements resulting from a legal obligation, or any processing that may be required to protect against illegal activities.</span></span></span></div>
 <div style={{lineHeight: '1.5'}}><br /></div><div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text"><u>Right to be informed — Request to know</u></span></span></span></div>
 <div style={{lineHeight: '1.5'}}><br /></div><div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text">
 Depending on the circumstances, you have a right to know:<span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text"><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text"><span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}><span data-custom-class="body_text"><BDT className="block-component" /></span></span></span></span></span></span></span></span></span></span></span></div>
 <ul><li style={{lineHeight: '1.5'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-class="body_text">whether we collect and use your personal information;<span style={{color: 'rgb(0, 0, 0)'}}><span style={{fontSize: '15px'}}><span data-custom-class="body_text"><span style={{color: 'rgb(0, 0, 0)'}}><span style={{fontSize: '15px'}}><span data-custom-class="body_text"><BDT className="statement-end-if-in-editor" /></span></span></span></span></span></span></span></span></span></li></ul><div><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text"><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text"><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text"><span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}><span data-custom-class="body_text"><BDT className="block-component" /></span></span></span></span></span></span></span></span></span></span></span></div>
 <ul><li style={{lineHeight: '1.5'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-class="body_text">the categories of personal information that we collect;<span style={{color: 'rgb(0, 0, 0)'}}><span style={{fontSize: '15px'}}><span data-custom-class="body_text"><span style={{color: 'rgb(0, 0, 0)'}}><span style={{fontSize: '15px'}}><span data-custom-class="body_text"><BDT className="statement-end-if-in-editor" /></span></span></span></span></span></span></span></span></span></li></ul><div><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text"><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text"><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text"><span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}><span data-custom-class="body_text"><BDT className="block-component" /></span></span></span></span></span></span></span></span></span></span></span></div>
 <ul><li style={{lineHeight: '1.5'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-class="body_text">the purposes for which the collected personal information is used;<span style={{color: 'rgb(0, 0, 0)'}}><span style={{fontSize: '15px'}}><span data-custom-class="body_text"><span style={{color: 'rgb(0, 0, 0)'}}><span style={{fontSize: '15px'}}><span data-custom-class="body_text"><BDT className="statement-end-if-in-editor" /></span></span></span></span></span></span></span></span></span></li></ul><div><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text"><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text"><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text"><span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}><span data-custom-class="body_text"><BDT className="block-component" /></span></span></span></span></span></span></span></span></span></span></span></div>
 <ul><li style={{lineHeight: '1.5'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-class="body_text">whether we sell or share personal information to third parties;<span style={{color: 'rgb(0, 0, 0)'}}><span style={{fontSize: '15px'}}><span data-custom-class="body_text"><span style={{color: 'rgb(0, 0, 0)'}}><span style={{fontSize: '15px'}}><span data-custom-class="body_text"><BDT className="statement-end-if-in-editor" /></span></span></span></span></span></span></span></span></span></li></ul><div><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text"><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text"><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text"><span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}><span data-custom-class="body_text"><BDT className="block-component" /></span></span></span></span></span></span></span></span></span></span></span></div>
 <ul><li style={{lineHeight: '1.5'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-class="body_text">the categories of personal information that we sold, shared, or disclosed for a business purpose;<span style={{color: 'rgb(0, 0, 0)'}}><span style={{fontSize: '15px'}}><span data-custom-class="body_text"><span style={{color: 'rgb(0, 0, 0)'}}><span style={{fontSize: '15px'}}><span data-custom-class="body_text"><BDT className="statement-end-if-in-editor" /></span></span></span></span></span></span></span></span></span></li></ul><div><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text"><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text"><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text"><span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}><span data-custom-class="body_text"><BDT className="block-component" /></span></span></span></span></span></span></span></span></span></span></span></div>
 <ul><li style={{lineHeight: '1.5'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-class="body_text">the categories of third parties to whom the personal information was sold, shared, or disclosed for a business purpose;<span style={{color: 'rgb(0, 0, 0)'}}><span style={{fontSize: '15px'}}><span data-custom-class="body_text"><span style={{color: 'rgb(0, 0, 0)'}}><span style={{fontSize: '15px'}}><span data-custom-class="body_text"><BDT className="statement-end-if-in-editor" /></span></span></span></span></span></span></span></span></span></li></ul><div><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text"><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text"><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text"><span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}><span data-custom-class="body_text"><BDT className="block-component" /></span></span></span></span></span></span></span></span></span></span></span></div>
 <ul><li style={{lineHeight: '1.5'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-class="body_text">the business or commercial purpose for collecting, selling, or sharing personal information; and<span style={{color: 'rgb(0, 0, 0)'}}><span style={{fontSize: '15px'}}><span data-custom-class="body_text"><span style={{color: 'rgb(0, 0, 0)'}}><span style={{fontSize: '15px'}}><span data-custom-class="body_text"><BDT className="statement-end-if-in-editor" /></span></span></span></span></span></span></span></span></span></li></ul><div style={{ lineHeight: '1.5' }}><BDT className="block-component"><span data-custom-class="body_text" /></BDT></div>
 <ul><li style={{lineHeight: '1.5'}}><span data-custom-class="body_text">the specific pieces of personal information we collected about you.<BDT className="statement-end-if-in-editor" /></span></li></ul><div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text">In accordance with applicable law, we are not obligated to provide or delete consumer information that is de-identified in response to a consumer request or to re-identify individual data to verify a consumer request.</span></span></span></div>
 <div style={{lineHeight: '1.5'}}><br /></div><div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text"><u>Right to Non-Discrimination for the Exercise of a Consumer’s Privacy Rights</u></span></span></span></div>
 <div style={{lineHeight: '1.5'}}><br /></div><div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text">We will not discriminate against you if you exercise your privacy rights.</span></span></span></div>
 <div style={{lineHeight: '1.5'}}><br /></div><div style={{ lineHeight: '1.5' }}><u><span data-custom-class="body_text">Right to Limit Use and Disclosure of Sensitive Personal Information</span></u></div>
 <div style={{lineHeight: '1.5'}}><BDT className="block-component"><span data-custom-class="body_text" /></BDT></div>&lt;&gt;
 <div style={{lineHeight: '1.5'}}><br /></div><div style={{ lineHeight: '1.5' }}><span data-custom-class="body_text">We do not process consumer's sensitive personal information.</span></div>
 <div style={{lineHeight: '1.5'}}><br /></div><div style={{ lineHeight: '1.5' }}><BDT className="statement-end-if-in-editor"><span data-custom-class="body_text" /></BDT></div>
 <div style={{lineHeight: '1.5'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-class="body_text"><u>Verification process</u></span></span></span></div><div style={{ lineHeight: '1.5' }}><br /></div>
 <div style={{lineHeight: '1.5'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-class="body_text">Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. These verification efforts require us to ask you to provide information so that we can match it with information you have previously provided us. For instance, depending on the type of request you submit, we may ask you to provide certain information so that we can match the information you provide with the information we already have on file, or we may contact you through a communication method (e.g.<BDT className="block-component" /> phone or email) that you have previously provided to us. We may also use other verification methods as the circumstances dictate.</span></span></span></div><div style={{ lineHeight: '1.5' }}><br /></div>
 <div style={{lineHeight: '1.5'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-class="body_text">We will only use personal information provided in your request to verify your identity or authority to make the request. To the extent possible, we will avoid requesting additional information from you for the purposes of verification. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes. We will delete such additionally provided information as soon as we finish verifying you.</span></span></span></div><div style={{ lineHeight: '1.5' }}><br /></div>
 <div style={{lineHeight: '1.5'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-class="body_text"><u>Other privacy rights</u></span></span></span></div><div><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text"><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text"><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text"><span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}><span data-custom-class="body_text"><BDT className="block-component" /></span></span></span></span></span></span></span></span></span></span></span></div>
 <ul><li style={{lineHeight: '1.5'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-class="body_text">You may object to the processing of your personal information.<span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-class="body_text"><span style={{color: 'rgb(0, 0, 0)'}}><span style={{fontSize: '15px'}}><span data-custom-class="body_text"><span style={{color: 'rgb(0, 0, 0)'}}><span style={{fontSize: '15px'}}><span data-custom-class="body_text"><BDT className="statement-end-if-in-editor" /></span></span></span></span></span></span></span></span></span></span></span></span></li></ul><div><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text"><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text"><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text"><span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}><span data-custom-class="body_text"><BDT className="block-component" /></span></span></span></span></span></span></span></span></span></span></span></div>
 <ul><li style={{lineHeight: '1.5'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-class="body_text">You may request correction of your personal data if it is incorrect or no longer relevant, or ask to restrict the processing of the information.<span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-class="body_text"><span style={{color: 'rgb(0, 0, 0)'}}><span style={{fontSize: '15px'}}><span data-custom-class="body_text"><span style={{color: 'rgb(0, 0, 0)'}}><span style={{fontSize: '15px'}}><span data-custom-class="body_text"><BDT className="statement-end-if-in-editor" /></span></span></span></span></span></span></span></span></span></span></span></span></li></ul><div><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text"><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text"><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text"><span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}><span data-custom-class="body_text"><BDT className="block-component" /></span></span></span></span></span></span></span></span></span></span></span></div>
 <ul><li style={{lineHeight: '1.5'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-class="body_text">You can designate an <BDT className="block-component" />authorised<BDT className="else-block" /> agent to make a request under the CCPA on your behalf. We may deny a request from an <BDT className="block-component" />authorised<BDT className="else-block" /> agent that does not submit proof that they have been validly <BDT className="block-component" />authorised<BDT className="else-block" /> to act on your behalf in accordance with the CCPA.<span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-class="body_text"><span style={{color: 'rgb(0, 0, 0)'}}><span style={{fontSize: '15px'}}><span data-custom-class="body_text"><span style={{color: 'rgb(0, 0, 0)'}}><span style={{fontSize: '15px'}}><span data-custom-class="body_text"><BDT className="statement-end-if-in-editor" /></span></span></span></span></span></span></span></span></span></span></span></span></li></ul><div><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text"><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text"><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text"><span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}><span data-custom-class="body_text"><BDT className="block-component" /></span></span></span></span></span></span></span></span></span></span></span></div>
 <ul><li style={{lineHeight: '1.5'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-class="body_text">You may request to opt out from future selling or sharing of your personal information to third parties. Upon receiving an opt-out request, we will act upon the request as soon as feasibly possible, but no later than fifteen (15) days from the date of the request submission.<span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-class="body_text"><span style={{color: 'rgb(0, 0, 0)'}}><span style={{fontSize: '15px'}}><span data-custom-class="body_text"><span style={{color: 'rgb(0, 0, 0)'}}><span style={{fontSize: '15px'}}><span data-custom-class="body_text"><BDT className="statement-end-if-in-editor" /></span></span></span></span></span></span></span></span></span></span></span></span></li></ul><div style={{ lineHeight: '1.5' }}><BDT className="block-component"><span style={{ fontSize: '15px' }} /></BDT></div> 
 {' '}
 <div style={{lineHeight: '1.5'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-class="body_text">To exercise these rights, you can contact us <BDT className="block-component" />by visiting <BDT className="question">jobstream.uk/data-request</BDT>, <BDT className="else-block" /></span><span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}><span data-custom-class="body_text"><span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}><span data-custom-class="body_text"><BDT className="block-component" />by email at <BDT className="question">CCPA@jobstream.uk</BDT>, <BDT className="statement-end-if-in-editor" /><BDT className="block-component" /></span><span data-custom-class="body_text"><BDT className="block-component" /><BDT className="block-component"><span data-custom-class="body_text" /></BDT></span></span></span></span></span></span>&lt;&gt;<span data-custom-class="body_text">or by referring to the contact details at the bottom of this document. If you have a complaint about how we handle your data, we would like to hear from you.</span><span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}><span data-custom-class="body_text"><BDT className="block-component"><BDT className="block-component" /></BDT></span></span></div>&lt;&gt;
 <div style={{lineHeight: '1.5'}}><BDT className="block-component"><span style={{fontSize: '15px'}} /></BDT></div><div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px' }}><br /></span></div>
 <div style={{lineHeight: '1.5'}}><span style={{fontSize: '15px'}}><strong><span data-custom-class="heading_2">Colorado Residents</span></strong></span></div><div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px' }}><br /></span></div>
 <div style={{lineHeight: '1.5'}}><span style={{fontSize: '15px'}}><span data-custom-class="body_text">This section applies only to Colorado residents. Under the Colorado Privacy Act (CPA), you have the rights listed below. However, these rights are not absolute, and in certain cases, we may decline your request as permitted by law.</span><BDT className="block-component" /></span></div><ul><li style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px' }}>
 <span data-custom-class="body_text">Right to be informed whether or not we are processing your personal data</span><BDT className="statement-end-if-in-editor" /></span></li></ul>
 <div style={{lineHeight: '1.5'}}><span style={{fontSize: '15px'}}><BDT className="block-component" /></span></div><ul><li style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px' }}>
 <span data-custom-class="body_text">Right to access your personal data</span><BDT className="statement-end-if-in-editor" /></span></li></ul>
 <div style={{lineHeight: '1.5'}}><BDT className="block-component" /></div><ul><li style={{ lineHeight: '1.5' }}>
 <span style={{fontSize: '15px'}}><span data-custom-class="body_text">Right to correct inaccuracies in your personal data</span></span><BDT className="statement-end-if-in-editor" /></li></ul>
 <div style={{lineHeight: '1.5'}}><BDT className="block-component" /></div><ul><li style={{ lineHeight: '1.5' }}>
 <span style={{fontSize: '15px'}}><span data-custom-class="body_text">Right to request deletion of your personal data</span></span><BDT className="statement-end-if-in-editor" /></li></ul>
 <div style={{lineHeight: '1.5'}}><span style={{fontSize: '15px'}}><BDT className="block-component" /></span></div><ul><li style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px' }}>
 <span data-custom-class="body_text">Right to obtain a copy of the personal data you previously shared with us</span><BDT className="statement-end-if-in-editor" /></span></li></ul>
 <div style={{lineHeight: '1.5'}}><BDT className="block-component" /></div><ul><li style={{ lineHeight: '1.5' }}>
 <span style={{fontSize: '15px'}}><span data-custom-class="body_text">Right to opt out of the processing of your personal data if it is used for targeted advertising, the sale of personal data, or profiling in furtherance of decisions that produce legal or similarly significant effects (<BDT className="block-component" />'profiling'<BDT className="else-block" />)</span></span><BDT className="statement-end-if-in-editor" /></li></ul>
 <div data-custom-class="body_text" style={{lineHeight: '1.5'}}><BDT className="block-component"><span data-custom-class="body_text" /></BDT><span style={{fontSize: '15px'}}>To submit a request to exercise </span><BDT className="block-component" style={{fontSize: '15px'}} /><span style={{fontSize: '15px'}}>these </span><BDT className="statement-end-if-in-editor" style={{fontSize: '15px'}} /><span style={{fontSize: '15px'}}>rights described above, please <BDT className="block-component" />email</span> <BDT className="question" style={{fontSize: '15px'}}>privacy@j4a.uk</BDT><span style={{fontSize: '15px'}}> or </span><BDT className="block-component" style={{fontSize: '15px'}} /><span style={{fontSize: '15px'}}>visit</span> <BDT className="question" style={{fontSize: '15px'}}>jobstream.uk/data-request</BDT><BDT className="else-block" style={{fontSize: '15px'}} /><span style={{fontSize: '15px'}}><span data-custom-class="body_text">.</span></span></div>&lt;&gt;
 <div style={{lineHeight: '1.5'}}><br /></div><div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px' }}>
 <span data-custom-class="body_text">If we decline to take action regarding your request and you wish to appeal our decision, please email us at <BDT className="block-component" /><BDT className="question">privacy@j4a.uk</BDT><BDT className="else-block" />. Within forty-five (45) days of receipt of an appeal, we will inform you in writing of any action taken or not taken in response to the appeal, including a written explanation of the reasons for the decisions.</span><BDT className="statement-end-if-in-editor" /></span></div>
 <div style={{lineHeight: '1.5'}}><BDT className="block-component" /></div><div style={{ lineHeight: '1.5' }}><br /></div>
 <div style={{lineHeight: '1.5'}}><strong><span style={{fontSize: '15px'}}><span data-custom-class="heading_2">Connecticut Residents</span></span></strong></div><div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px' }}><br /></span></div>
 <div style={{lineHeight: '1.5'}}><span style={{fontSize: '15px'}}><span data-custom-class="body_text">This section applies only to Connecticut residents. Under the Connecticut Data Privacy Act (CTDPA), you have the rights listed below. However, these rights are not absolute, and in certain cases, we may decline your request as permitted by law.</span><BDT className="block-component" /></span></div><ul><li style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px' }}>
 <span data-custom-class="body_text">Right to be informed whether or not we are processing your personal data</span><BDT className="statement-end-if-in-editor" /></span></li></ul>
 <div style={{lineHeight: '1.5'}}><BDT className="block-component" /></div><ul><li style={{ lineHeight: '1.5' }}>
 <span data-custom-class="body_text">Right to access your personal data</span><BDT className="statement-end-if-in-editor" /></li></ul>
 <div style={{lineHeight: '1.5'}}><span style={{fontSize: '15px'}}><BDT className="block-component" /></span></div><ul><li style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px' }}>
 <span data-custom-class="body_text">Right to correct inaccuracies in your personal data</span><BDT className="statement-end-if-in-editor" /></span></li></ul>
 <div style={{lineHeight: '1.5'}}><BDT className="block-component" /></div><ul><li style={{ lineHeight: '1.5' }}>
 <span style={{fontSize: '15px'}}><span data-custom-class="body_text">Right to request deletion of your personal data</span></span><BDT className="statement-end-if-in-editor" /></li></ul>
 <div style={{lineHeight: '1.5'}}><span style={{fontSize: '15px'}}><BDT className="block-component" /></span></div><ul><li style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px' }}>
 <span data-custom-class="body_text">Right to obtain a copy of the personal data you previously shared with us</span><BDT className="statement-end-if-in-editor" /></span></li></ul>
 <div style={{lineHeight: '1.5'}}><BDT className="block-component" /></div><ul><li style={{ lineHeight: '1.5' }}>
 <span style={{fontSize: '15px'}}><span data-custom-class="body_text">Right to opt out of the processing of your personal data if it is used for targeted advertising, the sale of personal data, or profiling in furtherance of decisions that produce legal or similarly significant effects (<BDT className="block-component" />'profiling'<BDT className="else-block" />)</span></span><BDT className="statement-end-if-in-editor" /></li></ul>
 <div data-custom-class="body_text" style={{lineHeight: '1.5'}}><BDT className="block-component"><span style={{fontSize: '15px'}}><span data-custom-class="body_text" /></span></BDT>To submit a request to exercise <BDT className="block-component" />these<BDT className="statement-end-if-in-editor" /> rights described above, please <BDT className="block-component" />email <BDT className="question">privacy@j4a.uk</BDT> or <BDT className="block-component" />visit <BDT className="question">jobstream.uk/data-request</BDT><BDT className="else-block" />.</div><div style={{ lineHeight: '1.5' }}><br /></div>
 <div style={{lineHeight: '1.4'}}><span style={{fontSize: '15px'}}><span data-custom-class="body_text">If we decline to take action regarding your request and you wish to appeal our decision, please email us at <BDT className="block-component" /><BDT className="question">privacy@j4a.uk</BDT><BDT className="else-block" />. Within sixty (60) days of receipt of an appeal, we will inform you in writing of any action taken or not taken in response to the appeal, including a written explanation of the reasons for the decisions.</span></span><BDT className="statement-end-if-in-editor" /><BDT className="block-component"><span style={{fontSize: '15px'}} /></BDT></div><div style={{ lineHeight: '1.4' }}><span style={{ fontSize: '15px' }}><br /></span></div>
 <div style={{lineHeight: '1.4'}}><span style={{fontSize: '15px'}}><strong><span data-custom-class="heading_2">Utah Residents</span></strong></span></div><div style={{ lineHeight: '1.4' }}><span style={{ fontSize: '15px' }}><br /></span></div>
 <div style={{lineHeight: '1.4'}}><span style={{fontSize: '15px'}}><span data-custom-class="body_text">This section applies only to Utah residents. Under the Utah Consumer Privacy Act (UCPA), you have the rights listed below. However, these rights are not absolute, and in certain cases, we may decline your request as permitted by law.</span><BDT className="block-component" /></span></div><ul><li style={{ lineHeight: '1.4' }}><span style={{ fontSize: '15px' }}>
 <span data-custom-class="body_text">Right to be informed whether or not we are processing your personal data</span><BDT className="statement-end-if-in-editor" /></span></li></ul>
 <div style={{lineHeight: '1.4'}}><span style={{fontSize: '15px'}}><BDT className="block-component" /></span></div><ul><li style={{ lineHeight: '1.4' }}><span style={{ fontSize: '15px' }}>
 <span data-custom-class="body_text">Right to access your personal data</span><BDT className="statement-end-if-in-editor" /></span></li></ul>
 <div style={{lineHeight: '1.4'}}><span style={{fontSize: '15px'}}><BDT className="block-component" /></span></div><ul><li style={{ lineHeight: '1.4' }}><span style={{ fontSize: '15px' }}>
 <span data-custom-class="body_text">Right to request deletion of your personal data</span><BDT className="statement-end-if-in-editor" /></span></li></ul>
 <div style={{lineHeight: '1.4'}}><span style={{fontSize: '15px'}}><BDT className="block-component" /></span></div><ul><li style={{ lineHeight: '1.4' }}><span style={{ fontSize: '15px' }}>
 <span data-custom-class="body_text">Right to obtain a copy of the personal data you previously shared with us</span><BDT className="statement-end-if-in-editor" /></span></li></ul>
 <div style={{lineHeight: '1.4'}}><span style={{fontSize: '15px'}}><BDT className="block-component" /></span></div><ul><li style={{ lineHeight: '1.4' }}><span style={{ fontSize: '15px' }}>
 <span data-custom-class="body_text">Right to opt out of the processing of your personal data if it is used for targeted advertising or the sale of personal data</span><BDT className="statement-end-if-in-editor" /></span></li></ul>
 <div data-custom-class="body_text" style={{lineHeight: '1.4'}}><span style={{fontSize: '15px'}}><BDT className="block-component"><span data-custom-class="body_text" /></BDT>To submit a request to exercise <BDT className="block-component" />these<BDT className="statement-end-if-in-editor" /> rights described above, please <BDT className="block-component" />email <BDT className="question">privacy@j4a.uk</BDT> or <BDT className="block-component" />visit <BDT className="question">jobstream.uk/data-request</BDT><BDT className="else-block" />.</span><BDT className="statement-end-if-in-editor"><span style={{fontSize: '15px'}} /></BDT><BDT className="block-component"><span style={{fontSize: '15px'}} /></BDT></div>&lt;&gt;
 <div style={{lineHeight: '1.5'}}><span style={{fontSize: '15px'}}><br /></span></div><div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px' }}><strong><span data-custom-class="heading_2">Virginia Residents</span></strong></span></div>
 <div style={{lineHeight: '1.5'}}><span style={{fontSize: '15px'}}><br /></span></div><div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px' }}><span data-custom-class="body_text">Under the Virginia Consumer Data Protection Act (VCDPA):</span></span></div>
 <div style={{lineHeight: '1.5'}}><span style={{fontSize: '15px'}}><br /></span></div><div data-custom-class="body_text" style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px' }}>
 <BDT className="block-component"><span data-custom-class="body_text" /></BDT><span data-custom-class="body_text">
 'Consumer'<BDT className="else-block" />
 {' '}
 means a natural person who is a resident of the Commonwealth acting only in an individual or household context. It does not include a natural person acting in a commercial or employment context.
 </span></span></div>
 <div style={{lineHeight: '1.5'}}><span style={{fontSize: '15px'}}><br /></span></div><div data-custom-class="body_text" style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px' }}>
 <BDT className="block-component"><span data-custom-class="body_text" /></BDT><span data-custom-class="body_text">
 'Personal data'<BDT className="else-block" />
 {' '}
 means any information that is linked or reasonably linkable to an identified or identifiable natural person.<BDT className="block-component" />
 'Personal data'<BDT className="else-block" />
 {' '}
 does not include de-identified data or publicly available information.
 </span></span></div>
 <div style={{lineHeight: '1.5'}}><span style={{fontSize: '15px'}}><br /></span></div><div data-custom-class="body_text" style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px' }}>
 <BDT className="block-component"><span data-custom-class="body_text" /></BDT><span data-custom-class="body_text">
 'Sale of personal data'<BDT className="else-block" />
 {' '}
 means the exchange of personal data for monetary consideration.
 </span></span></div>
 <div style={{lineHeight: '1.5'}}><span style={{fontSize: '15px'}}><br /></span></div><div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px' }}><span data-custom-class="body_text">
 If this definition of<BDT className="block-component" />
 'consumer'<BDT className="else-block" />
 {' '}
 applies to you, we must adhere to certain rights and obligations regarding your personal data.
 </span></span></div>
 <div style={{lineHeight: '1.5'}}><span style={{fontSize: '15px'}}><br /></span></div><div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px' }}><u><span data-custom-class="body_text">Your rights with respect to your personal data</span></u></span></div>
 <div style={{lineHeight: '1.5'}}><span style={{fontSize: '15px'}}><BDT className="block-component" /></span></div><ul><li style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px' }}>
 <span data-custom-class="body_text">Right to be informed whether or not we are processing your personal data</span><BDT className="statement-end-if-in-editor" /></span></li></ul>
 <div style={{lineHeight: '1.5'}}><span style={{fontSize: '15px'}}><BDT className="block-component" /></span></div><ul><li style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px' }}>
 <span data-custom-class="body_text">Right to access your personal data</span><BDT className="statement-end-if-in-editor" /></span></li></ul>
 <div style={{lineHeight: '1.5'}}><span style={{fontSize: '15px'}}><BDT className="block-component" /></span></div><ul><li style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px' }}>
 <span data-custom-class="body_text">Right to correct inaccuracies in your personal data</span><BDT className="statement-end-if-in-editor" /></span></li></ul>
 <div style={{lineHeight: '1.5'}}><span style={{fontSize: '15px'}}><BDT className="block-component" /></span></div><ul><li style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px' }}>
 <span data-custom-class="body_text">Right to request deletion of your personal data</span><BDT className="statement-end-if-in-editor" /></span></li></ul>
 <div style={{lineHeight: '1.5'}}><span style={{fontSize: '15px'}}><BDT className="block-component" /></span></div><ul><li style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px' }}>
 <span data-custom-class="body_text">Right to obtain a copy of the personal data you previously shared with us</span><BDT className="statement-end-if-in-editor" /></span></li></ul>
 <div style={{lineHeight: '1.5'}}><span style={{fontSize: '15px'}}><BDT className="block-component" /></span></div><ul><li style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px' }}>
 <span data-custom-class="body_text">Right to opt out of the processing of your personal data if it is used for targeted advertising, the sale of personal data, or profiling in furtherance of decisions that produce legal or similarly significant effects (<BDT className="block-component" />'profiling'<BDT className="else-block" />)</span><BDT className="statement-end-if-in-editor" /></span></li></ul>
 <div style={{lineHeight: '1.5'}}><span style={{fontSize: '15px'}}><BDT className="block-component" /></span></div><div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px' }}><u><span data-custom-class="body_text">Exercise your rights provided under the Virginia VCDPA</span></u></span></div>
 <div style={{lineHeight: '1.5'}}><span style={{fontSize: '15px'}}><br /></span></div><div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px' }}>
 <BDT className="block-component" /><span data-custom-class="body_text">
 You may<BDT className="block-component" />
 contact us by email at<BDT className="question">privacy@j4a.uk</BDT>
 {' '}
 or<BDT className="block-component" />
 visit<BDT className="question">jobstream.uk/data-request</BDT>
 <BDT className="else-block" />.</span></span></div>
 <div style={{lineHeight: '1.5'}}><span style={{fontSize: '15px'}}><br /></span></div><div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px' }}><span data-custom-class="body_text">
 If you are using an<BDT className="block-component" />
 authorised<BDT className="else-block" />
 {' '}
 agent to exercise your rights, we may deny a request if the<BDT className="block-component" />
 authorised<BDT className="else-block" />
 {' '}
 agent does not submit proof that they have been validly<BDT className="block-component" />
 authorised<BDT className="else-block" />
 {' '}
 to act on your behalf.
 </span></span></div>
 <div style={{lineHeight: '1.5'}}><span style={{fontSize: '15px'}}><br /></span></div><div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px' }}><u><span data-custom-class="body_text">Verification process</span></u></span></div>
 <div style={{lineHeight: '1.5'}}><span style={{fontSize: '15px'}}><br /></span></div><div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px' }}><span data-custom-class="body_text">
 We may request that you provide additional information reasonably necessary to verify you and your consumer's request. If you submit the request through an<BDT className="block-component" />
 authorised<BDT className="else-block" />
 {' '}
 agent, we may need to collect additional information to verify your identity before processing your request.
 </span></span></div>
 <div style={{lineHeight: '1.5'}}><span style={{fontSize: '15px'}}><br /></span></div><div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px' }}><span data-custom-class="body_text">Upon receiving your request, we will respond without undue delay, but in all cases, within forty-five (45) days of receipt. The response period may be extended once by forty-five (45) additional days when reasonably necessary. We will inform you of any such extension within the initial 45-day response period, together with the reason for the extension.</span></span></div>
 <div style={{lineHeight: '1.5'}}><span style={{fontSize: '15px'}}><br /></span></div><div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px' }}><u><span data-custom-class="body_text">Right to appeal</span></u></span></div>
 <div style={{lineHeight: '1.5'}}><span style={{fontSize: '15px'}}><br /></span></div><div style={{ lineHeight: '1.5' }}>
 <span style={{fontSize: '15px'}}><span data-custom-class="body_text">If we decline to take action regarding your request, we will inform you of our decision and reasoning behind it. If you wish to appeal our decision, please email us at <BDT className="block-component" /><BDT className="question">privacy@j4a.uk</BDT><BDT className="else-block" />. Within sixty (60) days of receipt of an appeal, we will inform you in writing of any action taken or not taken in response to the appeal, including a written explanation of the reasons for the decisions. If your appeal is denied, you may contact the <a data-custom-class="link" href="https://www.oag.state.va.us/consumer-protection/index.php/file-a-complaint" rel="noopener noreferrer" target="_blank"><span data-custom-class="link">Attorney General to submit a complaint</span></a>.</span></span><BDT className="statement-end-if-in-editor" />
 <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}><span data-custom-class="body_text"><span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}><span data-custom-class="body_text"><span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}><span data-custom-class="body_text"><span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}><span data-custom-class="body_text"><BDT className="statement-end-if-in-editor"><span data-custom-class="body_text"><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}><span data-custom-class="body_text"><span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}><span data-custom-class="body_text"><span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}><span data-custom-class="body_text"><span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}><span data-custom-class="body_text"><BDT className="statement-end-if-in-editor"><BDT className="statement-end-if-in-editor" /></BDT></span></span></span></span></span></span></span></span></span></span></span></BDT></span></span></span></span></span></span></span></span></span></span><BDT className="block-component"><span style={{ fontSize: '15px' }} /></BDT></div>
 <div style={{lineHeight: '1.5'}}><span style={{fontSize: '15px'}}><br /></span></div><div style={{ lineHeight: '1.5' }}><span id="otherlaws" style={{ fontSize: '15px' }}><strong><span data-custom-class="heading_1">12. DO OTHER REGIONS HAVE SPECIFIC PRIVACY RIGHTS?</span></strong></span></div>
 <div style={{lineHeight: '1.5'}}><span style={{fontSize: '15px'}}><br /></span></div><div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px' }}>
 <em><strong><span data-custom-class="body_text">In Short:</span></strong><span data-custom-class="body_text"> You may have additional rights based on the country you reside in.</span></em><BDT className="block-component" /></span></div>
 <div style={{lineHeight: '1.5'}}><span style={{fontSize: '15px'}}><br /></span></div><div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px' }}>
 <BDT className="block-component"><span data-custom-class="heading_2" /></BDT><span data-custom-class="heading_2">
 <strong>Australia</strong><BDT className="statement-end-if-in-editor" />
 <BDT className="block-component" /> 
 {' '}
 <strong>and</strong> 
 {' '}
 <BDT className="statement-end-if-in-editor" /><BDT className="block-component" />
 <strong>New Zealand</strong>
 </span>
 <BDT className="statement-end-if-in-editor"><span data-custom-class="heading_2" /></BDT>
 </span></div>
 <div style={{lineHeight: '1.5'}}><span style={{fontSize: '15px'}}><br /></span></div><div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px' }}><span data-custom-class="body_text">
 We collect and process your personal information under the obligations and conditions set by<BDT className="block-component" />
 Australia's Privacy Act 1988<BDT className="statement-end-if-in-editor" />
 <BDT className="block-component" /> and 
 {' '}
 <BDT className="statement-end-if-in-editor" /><BDT className="block-component" />
 New Zealand's Privacy Act 2020<BDT className="statement-end-if-in-editor" />
 {' '}
 (Privacy Act).
 </span></span></div>
 <div style={{lineHeight: '1.5'}}><span style={{fontSize: '15px'}}><br /></span></div><div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px' }}><span data-custom-class="body_text">
 This privacy notice satisfies the notice requirements defined in<BDT className="block-component" />
 {' '}
 both Privacy Acts<BDT className="block-component" />
 , in particular: what personal information we collect from you, from which sources, for which purposes, and other recipients of your personal information.
 </span></span></div>
 <div style={{lineHeight: '1.5'}}><span style={{fontSize: '15px'}}><br /></span></div><div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px' }}><span data-custom-class="body_text">If you do not wish to provide the personal information necessary to fulfill their applicable purpose, it may affect our ability to provide our services, in particular:</span></span></div>
 <div style={{lineHeight: '1.5'}}><span style={{fontSize: '15px'}}><BDT className="block-component" /></span></div><ul><li style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px' }}>
 <span data-custom-class="body_text">offer you the products or services that you want</span><BDT className="statement-end-if-in-editor" /></span></li></ul>
 <div style={{lineHeight: '1.5'}}><span style={{fontSize: '15px'}}><BDT className="block-component" /></span></div><ul><li style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px' }}>
 <span data-custom-class="body_text">respond to or help with your requests</span><BDT className="statement-end-if-in-editor" /></span></li></ul>
 <div style={{lineHeight: '1.5'}}><span style={{fontSize: '15px'}}><BDT className="block-component" /></span></div><ul><li style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px' }}>
 <span data-custom-class="body_text">manage your account with us</span><BDT className="statement-end-if-in-editor" /></span></li></ul>
 <div style={{lineHeight: '1.5'}}><span style={{fontSize: '15px'}}><BDT className="block-component" /></span></div><ul><li style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px' }}>
 <span data-custom-class="body_text">confirm your identity and protect your account</span><BDT className="statement-end-if-in-editor" /></span></li></ul>
 <div style={{lineHeight: '1.5'}}><span style={{fontSize: '15px'}}><span data-custom-class="body_text">At any time, you have the right to request access to or correction of your personal information. You can make such a request by contacting us by using the contact details provided in the section <BDT className="block-component" />'<BDT className="else-block" /><a data-custom-class="link" href="https://jobstream.uk/privacy-policy#request"><span data-custom-class="link">HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</span></a><BDT className="block-component" />'<BDT className="else-block" /></span></span></div>&lt;&gt;
 <div style={{lineHeight: '1.5'}}><span style={{fontSize: '15px'}}><br /></span></div><div style={{ lineHeight: '1.5' }}>
 <span style={{fontSize: '15px'}}>I<span data-custom-class="body_text">f you believe we are unlawfully processing your personal information, you have the right to submit a complaint about <BDT className="block-component" />a breach of the Australian Privacy Principles to the <a data-custom-class="link" href="https://www.oaic.gov.au/privacy/privacy-complaints/lodge-a-privacy-complaint-with-us" rel="noopener noreferrer" target="_blank"><span data-custom-class="link">Office of the Australian Information Commissioner</span></a><BDT className="statement-end-if-in-editor" /><BDT className="block-component" /> and <BDT className="statement-end-if-in-editor" /><BDT className="block-component" />a breach of New Zealand's Privacy Principles to the <a data-custom-class="link" href="https://www.privacy.org.nz/your-rights/making-a-complaint/" rel="noopener noreferrer" target="_blank"><span data-custom-class="link">Office of New Zealand Privacy Commissioner</span></a><BDT className="statement-end-if-in-editor" />.</span><BDT className="statement-end-if-in-editor" /></span><BDT className="block-component"><span style={{ fontSize: '15px' }} /></BDT></div>
 <div style={{lineHeight: '1.5'}}><span style={{fontSize: '15px'}}><br /></span></div><div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px' }}><strong><span data-custom-class="heading_2">Republic of South Africa</span></strong></span></div>
 <div style={{lineHeight: '1.5'}}><span style={{fontSize: '15px'}}><br /></span></div><div style={{ lineHeight: '1.5' }}>
 <span style={{fontSize: '15px'}}><span data-custom-class="body_text">At any time, you have the right to request access to or correction of your personal information. You can make such a request by contacting us by using the contact details provided in the section <BDT className="block-component" />'<BDT className="else-block" /></span></span><span data-custom-class="link"><a href="https://jobstream.uk/privacy-policy#request"><span style={{ fontSize: '15px' }}><span data-custom-class="link">HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</span></span></a></span>
 <span style={{fontSize: '15px'}}><span data-custom-class="body_text"><BDT className="block-component" />'<BDT className="else-block" /></span></span>
 </div>
 &lt;&gt;<div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px' }}><br /></span></div>
 <div style={{lineHeight: '1.5'}}><span style={{fontSize: '15px'}}><span data-custom-class="body_text">If you are unsatisfied with the manner in which we address any complaint with regard to our processing of personal information, you can contact the office of the regulator, the details of which are:</span></span></div><div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px' }}><br /></span></div>
 <div style={{lineHeight: '1.5'}}><a data-custom-class="link" href="https://inforegulator.org.za/" rel="noopener noreferrer" target="_blank"><span style={{fontSize: '15px'}}><span data-custom-class="body_text"><span data-custom-class="link">The Information Regulator (South Africa)</span></span></span></a></div><div style={{ lineHeight: '1.5' }}><span data-custom-class="body_text">
 <span style={{fontSize: '15px'}}>General enquiries: </span><a data-custom-class="link" href="mailto:enquiries@inforegulator.org.za" rel="noopener noreferrer" target="_blank"><span style={{ fontSize: '15px' }}><span data-custom-class="link">enquiries@inforegulator.org.za</span></span></a></span></div>
 <div style={{lineHeight: '1.5'}}><span data-custom-class="body_text"><span style={{fontSize: '15px'}}>Complaints (complete POPIA/PAIA form 5): </span><a data-custom-class="link" href="mailto:PAIAComplaints@inforegulator.org.za" rel="noopener noreferrer" target="_blank"><span style={{fontSize: '15px'}}><span data-custom-class="link">PAIAComplaints@inforegulator.org.za</span></span></a><span style={{fontSize: '15px'}}> &amp; </span></span><a data-custom-class="link" href="mailto:POPIAComplaints@inforegulator.org.za" rel="noopener noreferrer" target="_blank"><span style={{fontSize: '15px'}}><span data-custom-class="body_text"><span data-custom-class="link">POPIAComplaints@inforegulator.org.za</span></span></span></a><span style={{fontSize: '15px'}}><BDT className="statement-end-if-in-editor" /><BDT className="statement-end-if-in-editor" /></span> <BDT className="block-component"><span style={{fontSize: '15px'}} /></BDT></div><div style={{ lineHeight: '1.5' }}><br /></div>
 <div id="policyupdates" style={{lineHeight: '1.5'}}><span style={{color: 'rgb(127, 127, 127)'}}><span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span id="control" style={{color: 'rgb(0, 0, 0)'}}><strong><span data-custom-class="heading_1">13. DO WE MAKE UPDATES TO THIS NOTICE?</span></strong></span></span></span></span></span></div><div style={{ lineHeight: '1.5' }}><br /></div>
 <div style={{lineHeight: '1.5'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-class="body_text"><em><strong>In Short: </strong>Yes, we will update this notice as necessary to stay compliant with relevant laws.</em></span></span></span></div><div style={{ lineHeight: '1.5' }}><br /></div>
 <div style={{lineHeight: '1.5'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-class="body_text">We may update this privacy notice from time to time. The updated version will be indicated by an updated <BDT className="block-component" />'Revised'<BDT className="else-block" /> date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.</span></span></span></div><div style={{ lineHeight: '1.5' }}><br /></div>
 <div id="contact" style={{lineHeight: '1.5'}}><span style={{color: 'rgb(127, 127, 127)'}}><span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span id="control" style={{color: 'rgb(0, 0, 0)'}}><strong><span data-custom-class="heading_1">14. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</span></strong></span></span></span></span></span></div><div style={{ lineHeight: '1.5' }}><br /></div>
 <div style={{lineHeight: '1.5'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-class="body_text">If you have questions or comments about this notice, you may <span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}><span data-custom-class="body_text"><BDT className="block-component" /></span></span>contact our Data Protection Officer (DPO)<BDT className="block-component" />, <span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}><span data-custom-class="body_text"><BDT className="question">James Arnott</BDT></span></span>,<span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-class="body_text"><BDT className="statement-end-if-in-editor" /></span><span data-custom-class="body_text"> by email at </span></span> </span><span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}><span data-custom-class="body_text"><BDT className="question">james@jobstream.uk</BDT></span></span>,<BDT className="block-component" /></span><span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}><span data-custom-class="body_text"><BDT className="else-block"><BDT className="block-component" /> or <BDT className="statement-end-if-in-editor" /></BDT></span></span><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-class="body_text">contact us by post at:</span></span></span></span></span></div>&lt;&gt;
 <div style={{lineHeight: '1.5'}}><br /></div><div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
 <span data-custom-class="body_text"><span style={{fontSize: '15px'}}><span style={{color: 'rgb(89, 89, 89)'}}><span style={{color: 'rgb(89, 89, 89)'}}><span data-custom-class="body_text"><BDT className="question">J4A Industries</BDT></span></span></span></span></span><span data-custom-class="body_text"><span style={{ color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text"><BDT className="block-component"><BDT className="block-component" /></BDT></span></span></span></span></span></div>
 <div style={{lineHeight: '1.5'}}><span style={{fontSize: '15px'}}><span style={{color: 'rgb(89, 89, 89)'}}><span style={{color: 'rgb(89, 89, 89)'}}><span data-custom-class="body_text"><BDT className="question">James Arnott<span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-class="body_text"><span style={{color: 'rgb(89, 89, 89)'}}><span data-custom-class="body_text"><BDT className="block-component"><BDT className="statement-end-if-in-editor" /></BDT></span></span></span></span></span><span data-custom-class="body_text"><span style={{color: 'rgb(89, 89, 89)'}}><BDT className="block-component" /></span></span></BDT></span></span></span></span></div><div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px' }}><span style={{ color: 'rgb(89, 89, 89)' }}><span style={{ color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text"><BDT className="question">
 High Trees, The Street<span data-custom-class="body_text"><span style={{ color: 'rgb(89, 89, 89)' }}><BDT className="block-component" /></span></span></BDT></span></span></span></span></div>
 <div style={{lineHeight: '1.5'}}><span data-custom-class="body_text"><BDT className="question">Shoreham-By-Sea</BDT><span style={{fontSize: '15px'}}><span data-custom-class="body_text"><BDT className="block-component" />, <BDT className="question">West Sussex</BDT><BDT className="statement-end-if-in-editor" /></span><BDT className="block-component" /> <BDT className="question">BN435NJ</BDT><BDT className="statement-end-if-in-editor" /><span data-custom-class="body_text"><span style={{color: 'rgb(89, 89, 89)'}}><BDT className="block-component" /><BDT className="block-component" /></span></span></span></span></div><div style={{ lineHeight: '1.5' }}>
 <span style={{fontSize: '15px'}}><span data-custom-class="body_text"><BDT className="question">England</BDT></span></span><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}><span data-custom-class="body_text"><BDT className="question"><span data-custom-class="body_text"><span style={{ fontSize: '15px' }}>
 <span data-custom-class="body_text"><span style={{color: 'rgb(89, 89, 89)'}}><BDT className="else-block" /><BDT className="statement-end-if-in-editor" /></span></span><span style={{ color: 'rgb(89, 89, 89)' }}><BDT className="else-block"><span data-custom-class="body_text" /></BDT></span></span></span></BDT></span></span></span>
 <BDT className="block-component" /> 
 {' '}
 <span data-custom-class="body_text"><span style={{fontSize: '15px'}}><span data-custom-class="body_text"><span style={{color: 'rgb(89, 89, 89)'}}><BDT className="statement-end-if-in-editor"><span style={{color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px'}}><span data-custom-class="body_text"><BDT className="block-component"><BDT className="block-component" /></BDT></span></span></span></BDT></span></span></span></span>
 </div>
 &lt;&gt;<div style={{ lineHeight: '1.5' }}><br /></div>
 <div style={{lineHeight: '1.5'}}><span data-custom-class="body_text" style={{fontSize: '15px'}}>If you are a resident in the United Kingdom, we are the <BDT className="block-component" />'data controller'<BDT className="else-block" /> of your personal information. We have appointed <span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}><span data-custom-class="body_text"><BDT className="question">James Arnott</BDT></span></span> to be our representative in the UK. You can contact them directly regarding our processing of your information<span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}><span data-custom-class="body_text">,<BDT className="block-component" /> by email at <BDT className="question">james@jobstream.uk</BDT>,<BDT className="statement-end-if-in-editor" /><BDT className="block-component" /><BDT className="block-component" /></span></span> or by post to:</span></div><div style={{ lineHeight: '1.5' }}><br /></div>
 <div style={{lineHeight: '1.5'}}><span style={{fontSize: '15px'}}><span data-custom-class="body_text"><BDT className="question">High Trees, The Street<span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}><span data-custom-class="body_text"><BDT className="block-component" /></span></span></BDT></span></span></div><div style={{ lineHeight: '1.5' }}><span style={{ fontSize: '15px' }}><span data-custom-class="body_text">
 <span style={{fontSize: '15px'}}><span data-custom-class="body_text"><BDT className="question">Shoreham-By-Sea</BDT></span></span><span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}><span data-custom-class="body_text"><BDT className="block-component" /></span></span>
 <span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-class="body_text">, </span></span><span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>
 <span data-custom-class="body_text"><BDT className="question">West Sussex</BDT></span><span data-custom-class="body_text"><BDT className="statement-end-if-in-editor" /></span></span>
 <span style={{fontSize: '15px'}}><span data-custom-class="body_text"> <BDT className="question">BN43 5NJ</BDT></span></span>
 </span></span></div>
 <div style={{lineHeight: '1.5'}}><span data-custom-class="body_text" style={{fontSize: '15px'}}><BDT className="block-component" /><BDT className="question">England</BDT><BDT className="else-block" /><span style={{fontSize: '15px'}}><span data-custom-class="body_text"><span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}><span style={{fontSize: '15px'}}><span data-custom-class="body_text"><BDT className="statement-end-if-in-editor" /></span></span></span></span></span></span><BDT className="block-component"><span style={{fontSize: '15px'}} /></BDT><span style={{fontSize: '15px'}}><span data-custom-class="body_text"><span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}><span style={{fontSize: '15px'}}><span data-custom-class="body_text"><BDT className="statement-end-if-in-editor"><BDT className="block-component" /></BDT></span></span></span></span></span></div><div style={{ lineHeight: '1.5' }}><br /></div>
 <div id="request" style={{lineHeight: '1.5'}}><span style={{color: 'rgb(127, 127, 127)'}}><span style={{color: 'rgb(89, 89, 89)', fontSize: '15px'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span id="control" style={{color: 'rgb(0, 0, 0)'}}><strong><span data-custom-class="heading_1">15. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</span></strong></span></span></span></span></span></div><div style={{ lineHeight: '1.5' }}><br /></div>
 <div style={{lineHeight: '1.5'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span style={{fontSize: '15px', color: 'rgb(89, 89, 89)'}}><span data-custom-class="body_text"><BDT className="block-component" />You have the right to request access to the personal information we collect from you, change that information, or delete it. <BDT className="statement-end-if-in-editor" />To request to review, update, or delete your personal information, please <BDT className="block-component" /></span><span data-custom-class="body_text">visit: <BDT className="question">jobstream.uk/data-request</BDT><BDT className="else-block" /></span></span><span data-custom-class="body_text">.</span></span></div> 
 {' '}
 <style dangerouslySetInnerHTML={{__html: "\nul {\nlist - style - type: square;\n}\nul > li > ul {\nlist - style - type: circle;\n}\nul > li > ul > li > ul {\nlist - style - type: square;\n}\nol li {\nfont - family: Arial ;\n}\n" }} />
 </div>
               <div style={{
  color: '#595959', fontSize: '14px', fontFamily: 'Arial', paddingTop: '16px' 
 }}>
     This privacy policy was created using Termly's 
 {' '}
     <a style={{ color: 'rgb(48, 48, 241) !important' }} href="https://termly.io/products/privacy-policy-generator/">Privacy Policy Generator</a>
 .
 </div>
             </div>
                                                 </div>
                                                               </div>
                                                             </div>
                                                           </div>
                                                         </div>
                                                       </div>
                                                     </div>
                                                   </div>
 
                                                 </div>
                                           </div>
                                         </div>
                                       </div>
                                     </div>
                                   </div>
                                 </div>
                               </div>
                             </div>
                           </div>
                         </div>
 
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
 );
 

