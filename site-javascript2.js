function callforpaper(){
    elementToChange = document.getElementById("container")
    elementToChange.innerHTML = `
    <div class="call-for-papers">
    
    <h3>Submit Full Length Paper</h3>
    <p>Authors are requested to submit full length paper online using 
        the following web link: 
        <a href="https://easychair.org/my/conference?conf=fite20200#">
            https://easychair.org/my/conference?conf=fite20200#
        </a>
        <ul class="li-head">
            <li>Please follow the given template for '<a href="./Downloadables/Template_ windows.docm">Windows</a>' and '<a href="./Downloadables/Template_mac.docm">Mac</a>' format for Full Length Paper Submission </li>
            <li>Note: Papers must be submitted in both .DOC and .PDF format </li>
        </ul>
    </p>
    </br>
    <h2>Important Dates</h2>
    <table>
        <tr>
            <td>Deadline for Full Paper Submission</td>
            <td>15th August 2020</td>
        </tr>
        <tr>
            <td>Notification of Paper Acceptance</td>
            <td>14th September 2020</td>                        
        </tr>
        <tr>
            <td>Deadline for Camera-Ready Paper Submission</td>
            <td>28th September 2020</td>
            
        </tr>
        <tr>
            <td>Conference</td>
            <td>15 - 16 October 2020</td>
        </tr>
        <tr>
            <td>Early Registration Deadline </td>
            <td>28th September 2020     </td>
        </tr>
    </table>

    <ul class="li-head">Submission Guidelines
        <li>Prospective authors from India and abroad are invited to submit manuscripts reporting <span class="bold">original unpublished</span> research and recent developments in the topics related to the conference.</li>
        <li>Submissions must include title, abstract, author affiliation with email address and keywords.</li>
        <li>Paper should be submitted as per template which is available on conference webpage.</li>
        <li>The paper should not contain page numbers or any special headers or footers.</li>
        <li>Regular papers should present novel perspectives within the general scope of the conference.</li>
        <li>Short papers (Work-in-Progress) are an opportunity to present preliminary or interim results.</li>
        <li>Posters are intended for ongoing research projects, concrete realizations, or industrial applications/projects presentations.</li>
        <li>The paper length should not exceed <span class="bold">8 pages</span>. However, the authors can extend maximum <span class="bold">12 pages</span> over length page charge of <span class="bold">Rs.1000<span> per pages.</li>
        <li>Literature reviews/survey papers will only be considered if they present a new perspective or clearly benefit the field. To be published, such papers must go beyond a review of the literature to define the field in a new way or highlight exciting new technologies or areas of research.</li>
        <li>All submitted papers will be subjected to a "similarity test" by Turnitin Software.</li>
        <li>Papers achieving a <span class="bold">20%</span> similarity score will be examined and those that are deemed unacceptable will be rejected/withdrawn without a formal review.</li>
    </ul>
</div>
`
}