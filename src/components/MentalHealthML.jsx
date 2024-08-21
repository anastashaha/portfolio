import React from 'react';
import './IndividualProject.css'
import decisiontreeImg from '../assets/project_images/mentalhealthML/decision_tree.png'
import US_vs_non from '../assets/project_images/mentalhealthML/us_vs_non.png'
import gender from '../assets/project_images/mentalhealthML/gender.png'
import fam_history from '../assets/project_images/mentalhealthML/family_history.png'
import map from '../assets/project_images/mentalhealthML/map.png'
import key from '../assets/project_images/mentalhealthML/key.png'
import confounding from '../assets/project_images/mentalhealthML/including_confounding.png'
import excl_confounding from '../assets/project_images/mentalhealthML/excluding_confounding.png'
import key_features from '../assets/project_images/mentalhealthML/key_features.png'
import neuralnet from '../assets/project_images/mentalhealthML/neuralnet.png'
import decisiontree from '../assets/project_images/mentalhealthML/decisiontree.png'
import randomforest from '../assets/project_images/mentalhealthML/randomforest.png'
import neuralnetFN from '../assets/project_images/mentalhealthML/neural_net_FN.png'
import decisiontreeFN from '../assets/project_images/mentalhealthML/decision_tree_FN.png'
import randomforestFN from '../assets/project_images/mentalhealthML/random_forest_FN.png'
import roc from '../assets/project_images/mentalhealthML/ROC.png'


let project = {
    motivation1: "How must we shape the tech industry moving forward to support people from different backgrounds with regard to their mental health?",
    motivation2: "Are there patterns among people who seek treatment and those who do not?",
    motivation3: "How might company attitudes toward mental health vary and does this variation have implications on an individual’s decision to seek help?",
    feature_eng: "To begin, I prioritized the data cleaning and pre-processing stage to ensure the integrity and quality of the dataset that will later be fed into our machine learning model.",
    feature_eng2: "The selection of variables was strategically aligned with the objective of understanding and supporting mental health in the tech industry, rather than diagnosing mental health disorders. Demographics, including age, gender, family history of mental health, country, and state, were essential to capture the diverse personal backgrounds of participants. These variables offer a deeper insight into how mental health experiences vary across different demographics, providing a holistic view of the industry's landscape. Company culture elements such as whether a company is tech-oriented or not, the total number of employees, and the nature of work arrangements (like remote work) were chosen to evaluate the impact of the workplace environment on mental health decisions.",
    EDA: "Next, we did some exploratory data analysis before finalizing our features to better visualize what we were working with. Below are a few examples of graphs we ran to improve our process of feature selection.",
    us_vs_non: "This graph compared the ratio of respondents with a current mental disorder to those without one, differentiating between those in the United States and those outside.",
    key_finding1: "A higher ratio of mental disorders was observed among U.S. respondents, suggesting a potential influence of American tech industry culture or expectations on mental health. This led to a hypothesis about the unique challenges within the U.S. tech industry and its impact on mental health. Alternatively, it raises the possibility that there is greater acknowledgment and openness about mental health issues in the U.S. compared to other countries. This difference in recognition and acceptance could contribute to the higher reported rates of mental disorders among U.S. respondents, reflecting varying cultural attitudes towards mental health globally.",
    gender: "This visualization split data based on gender, categorizing respondents into male, female, and other. It explored the ratio of respondents with a current mental disorder against those without one in each gender category.",
    key_finding2: "Although there wasn’t an equal amount of respondents for each grouping, some patterns are still noticeable. For example, there is a higher ratio of current mental disorders in females and others compared to males. In comparison, almost every participant who identified as a gender other than male and female has a current mental disorder. ",
    fam_history: "The third graph divided respondents based on family history of mental illness and further segmented them into those with a current mental disorder. It then examined the ratio of those who sought treatment versus those who didn’t.",
    key_finding3: "A significant trend was observed where individuals with a family history of mental illness were more likely to seek treatment. In this case it is apparent that those with family history of mental illness seem more likely to seek treatment than those without. ",
    map1: "Majority of respondents live in more populated states with major metropolitan areas",
    map2: "Most respondents are from California, one of the top 5 states to hire the most high-tech workers",
    map3: "Major metropolitan areas also tend to have higher treatment rates (ex. California, Texas, etc.)",
    map4: "Since treatment rates range from 35.71% to 85.71% we decided it may be a useful feature for our models",
    dimRed1: "Initially, the dataset with all features, including those that might confound the analysis, was reduced to a two-dimensional space. This reduction involved t-distributed Stochastic Neighbor Embedding (t-SNE), which helps in visualizing complex data in a simpler form.",
    dimRed2: "The second stage involved excluding confounding features and reducing the remaining features to a 2D space. This step aimed to focus on the features most relevant to the analysis without the interference of confounding variables.",
    dimRed3: "Finally, focusing solely on key features that are significant for the analysis, the data was again reduced to a two-dimensional space. This stage represents the most refined and focused dataset, ready for efficient and effective modeling.",
    modelbuilding: "Now, we were ready to begin our model building and performance evaluation phase. During this stage, we built and assessed three machine learning models: Neural Network, Decision Tree, and Random Forest. The primary criterion for evaluation was the accuracy of each model in predicting whether an individual in the tech industry would seek help for a mental health disorder.",
    modelbuildingROC1: "To evaluate further, we generated a Receiver Operating Characteristic (ROC) curve for each model to illustrate the trade-off between clinical sensitivity (true positive rate) and specificity (true negative rate).",
    modelbuildingROC2: "Using the Area Under the Curve (AUC) metric, which shows that a higher AUC indicates a model’s superior capability in distinguishing between the two diagnostic groups, we noted that the Decision Tree and Random Forest models exhibited the best classification abilities.",
    modelbuildingROC3: "The Neural Network model required more fine tuning of its architecture and training algorithm as it needed more complex data cleaning. This made it a more challenging model to optimize for our context.",
    reflection1: "Through this journey of utilizing machine learning to assess mental health in the tech industry, I've gained significant insights into the complexities and responsibilities that come with this endeavor. The crux of the challenge lies in the precision and ethical application of predictive models, particularly in a domain as sensitive as mental health. I realize that inaccurate predictions can lead to dire consequences. In reviewing this large dataset, I also realize that there are sampling biases and many undiagnosed factors that go into the raw data. ",
    reflection2: "At the end of the day, it’s not just about the algorithms and the data; it’s about the people behind the numbers. Misinterpretations or biases in models can exacerbate the issues they are designed to address, leading to harmful stigmatization or misdiagnosis. This understanding has reinforced my belief in the need for a careful, responsible approach when dealing with such delicate topics. Data Scientists and Machine Learning Engineers bear the moral responsibility to ensure these tools do more good than harm.",
    reflection3: "Beyond the technical aspect of this project, this topic resonates deeply with my own values and experiences in the tech industry. As I completed this exploration only months before the very beginning of my career in tech, I had the foresight to be intentional with the choices I make in the projects I undertake, the organizations I choose to be a part of, and the precedent I set as an individual. I was fortunate to be able to choose a company with great mental health benefits and a demonstrated commitment to safety and wellness. Here, I continue to openly talk about therapy, mental illness, and balance. "
}

function MentalHealthML() {
    return (
        <div className="project-container">
            {/* Title and overview */}
            <div className="project-grid">
                <div className="grid-item left-col-title">
                    <div className="role project-info"><strong>Role:</strong>
                        <div> Machine Learning/Data Engineer, Analyst</div>
                    </div>
                    <div className="tools project-info"><strong>Tools:</strong>
                        <div> Python, Pandas, Scikit-learn, Seaborn, Matplotlib, Numpy</div>
                    </div>
                    <div className="context project-info"><strong>Context:</strong>
                        <div> Group capstone project (2020) </div>
                    </div>
                    <div className="context project-info"><strong>Team:</strong>
                        <div> Allison Trent, Ashley Quiterio, Cindy Liu </div>
                    </div>
                </div>

                <div className="grid-item right-col-title">
                    <h1 className="large-title">Using Machine Learning to Address Mental Health in the Technology Industry</h1>
                </div>
            </div>

            {/* Motivation*/}
            <div className="project-grid">
                <div className="grid-item title">Motivation</div>
                <div className="grid-item content">The tech sector is and has been at <u><a href="https://www.information-age.com/we-are-at-a-critical-point-for-mental-health-in-the-tech-sector-123489906/">“a critical point for mental health”</a></u>, and the Covid-19 pandemic only exacerbated the matter. The immense pressures of the industry’s fast-paced nature occasionally lead to odd hours, late nights, and the need to consistently go above and beyond, fuelling the mental health crisis. As final-year undergraduate students studying Data Science at UC Berkeley, my team and I were anxious to enter the tech industry and decided to dig a little deeper into the issue. To begin, we posed some motivating questions:</div>
                <div className="grid-item content">
                    <ul>
                        <li><strong>{project.motivation1}</strong></li>
                        <li><strong>{project.motivation2}</strong></li>
                        <li><strong>{project.motivation3}</strong></li>
                    </ul>
                </div>
            </div>

            {/* Feature Engineering: Data Cleaning & Pre-Processing*/}
            <div className="project-grid">
                <div className="grid-item title">Feature Engineering: Data Cleaning & Pre-Processing</div>
                <div className="grid-item content">{project.feature_eng}</div>
                <div className="grid-item content">We are using mental health data from surveys run by Open Sourcing Mental Illness (OSMI) in 2016. The dataset can be found <u><a href="https://www.kaggle.com/osmi/mental-health-in-tech-2016?select=mental-heath-in-tech-2016_20161114.csv">here</a></u>. Information about the dataset:</div>
                <div className="grid-item content">
                    <ul>
                        <li>1433 survey respondents from 2016</li>
                        <li>63 potential features</li>
                        <li>Measures attitudes towards mental health in the tech workplace</li>
                        <li>Explores social effects of mental health disorders</li>
                        <li>Examines frequency of mental health disorders among tech workers</li>
                    </ul>
                </div>
                <div className="grid-item content">Things we did to clean our data:</div>
                
                <div className="grid-item content"><strong>(1) Downsizing the Dataframe</strong></div>
                <div className="grid-item content">
                    <ul>
                        <li>Converted survey questions to shorter column names in order to make them more accessible for when we all worked with the various features later on.</li>
                        <li>Dropped respondents who marked themselves as self-employed as we are only interested in addressing mental health in larger tech companies.</li>
                        <li>Dropped questions that did not provide relevant information to our guiding questions and removed columns that were more than half-empty.</li>
                    </ul>
                </div>

                <div className="grid-item content"><strong>(2) Address missing or incorrect data</strong></div>
                <div className="grid-item content">
                    <ul>
                        <li>For categorical data, we replaced missing data with the mode.</li>
                        <li>For numerical data, we replaced the missing values with the mean.</li>
                    </ul>
                </div>

                <div className="grid-item content"><strong>(3) Encoding</strong></div>
                <div className="grid-item content">
                    <ul>
                        <li>Created dummy variables to convert data into numeric values.</li>
                    </ul>
                </div>    
            </div>

            {/* Feature Engineering: Feature Selection*/}
            <div className="project-grid">
                <div className="grid-item title">Feature Engineering: Feature Selection</div>
                <div className="grid-item content">{project.feature_eng2}</div>
                <div className="grid-item content">Furthermore, variables related to company aid and resources, like awareness of mental health care initiatives, available mental health benefits, resources, and policies regarding medical leave, were included to gauge the effectiveness and reach of employer-supported mental health care. The variable <strong>'Sought Treatment'</strong> was particularly crucial, as it shifted the focus from identifying mental health disorders to understanding and encouraging the decision-making process for seeking help. This approach respects individual privacy and autonomy, ensuring that the algorithm serves as a support tool rather than a diagnostic mechanism. </div>
                <div className="grid-item content"><strong>Independent Variables:</strong></div>
                <div className="grid-item content">
                    <ul>
                        <li><i>Demographics</i>: Essential features reflecting the personal attributes of participants.</li>
                        <li><i>Company Culture</i>: Aspects of the workplace environment and ethos.</li>
                        <li><i>Company Aid & Resources</i>: Support and resources provided by companies for mental health.</li>
                    </ul>
                </div>

                <div className="grid-item content"><strong>Dependent Variables:</strong></div>
                <div className="grid-item content">
                    <ul>
                        <li><i>Sought Treatment</i>: The primary outcome being predicted by the model, indicating whether individuals sought treatment for mental health issues.</li>
                    </ul>
                </div>

                <div className="grid-item content"><strong>Confounding Variables:</strong></div>
                <div className="grid-item content">
                    <ul>
                        <li><i>Current Mental Disorder</i></li>
                        <li><i>Past Mental Disorder</i></li>
                        <li><i>Professional Diagnosis</i></li>
                        <li><i>Self Diagnosis</i></li>
                        <li><i>Condition</i>: These variables potentially affect both the independent variables and the dependent variable, complicating their relationship.</li>
                    </ul>
                </div>

                <div className="grid-item content">We used the Decision Tree model to identify which features (variables) were most impactful in predicting whether an individual in the tech industry would seek treatment for mental health issues.</div>
                <div className="grid-item content">Here's a detailed explanation of what was done and why:</div>

                <div className="grid-item content">
                    <ol>
                        <li><strong>Analyzing Decision Tree Splits:</strong> The Decision Tree algorithm was employed to analyze how different features influenced the prediction outcome. Decision Trees work by splitting the data based on the value of certain features; these splits are made at points where the feature most effectively separates the data into groups with different outcomes. By observing these splits, it becomes possible to understand which features are most decisive in predicting whether someone seeks mental health treatment.</li>
                        <li><strong>Identification of Significant Features:</strong> Through the analysis of the decision tree splits, specific features were identified as significant. For instance, “Family History of Mental Health” emerged as a significant feature. This indicates that among all the features in the cleaned dataset, a family history of mental health issues was a strong predictor of whether an individual would seek treatment. This feature likely captured important information about the individual's awareness and perception of mental health issues, which could influence their decision to seek help.</li>
                    </ol>
                </div>
            </div>

            <div className="project-image"><img src={decisiontreeImg} alt="Decision tree splits"/></div>

            {/* EDA */}
            <div className="project-grid">
                <div className="grid-item title">Exploratory Data Analysis</div>
                <div className="grid-item content">{project.EDA}</div>
                
                <div className="grid-item centered-text"><strong>Respondents by Geography (U.S. vs. Non-U.S.)</strong></div>
                <div className="grid-item content"><img src={US_vs_non} alt="Respondents by Geography (U.S. vs. Non-U.S.)"/></div>
                <div className="grid-item content">{project.us_vs_non}</div>
                <div className="grid-item content">
                    <li><strong>Key Finding:</strong> {project.key_finding1}</li>
                </div>

                <div className="grid-item centered-text"><strong>Gender and Mental Health</strong></div>
                <div className="grid-item content"><img src={gender} alt="Respondents by Gender"/></div>
                <div className="grid-item content">{project.gender}</div>
                <div className="grid-item content">
                    <li><strong>Key Finding:</strong> {project.key_finding2}</li>
                </div>

                <div className="grid-item centered-text"><strong>Family History of Mental Illness and Treatment Seeking</strong></div>
                <div className="grid-item content"><img src={fam_history} alt="Respondents by family history of mental illness and treatment seeking"/></div>
                <div className="grid-item content">{project.fam_history}</div>
                <div className="grid-item content">
                    <li><strong>Key Finding:</strong> {project.key_finding3}</li>
                </div>
            </div>

            <div className="half-grid">
                <div className="left-container"><img src={map} alt="map of United States respondents and treatment rate"/></div>
                <div className="right-container">
                    <div>We also took a look at the number of respondents and treatment rate by state.</div>
                    <ul>
                        <li>{project.map1}</li>
                        <li>{project.map2}</li>
                        <li>{project.map3}</li>
                        <li>{project.map4}</li>
                    </ul>
                </div>
            </div>

            {/* Dimensionality Reduction */}
            <div className="project-grid">
                <div className="grid-item title">Dimensionality Reduction</div>
                <div className="grid-item content">We then simplified the dataset by reducing the number of features (dimensions) it contains, using a technique called <strong>dimensionality reduction</strong>. This helped us tackle the "curse of dimensionality," which can lead to overfitting and inefficiencies in machine learning models. </div>
                <div className="grid-item content">The “Sought Treatment” feature corresponds with the labels on our plot. This model will dimensionally reduce into 2 dimensions, and it will reduce all the features available in the original dataset that have been cleaned and transformed to dummy variables (except for the Sought Treatment feature).</div>
                <div className="grid-item content">
                    <ul>
                        <li><strong>From 338D to 2D (All Features including confounding)</strong>: {project.dimRed1}</li>
                        <li><strong>From 142D to 2D (All Features excluding confounding)</strong>: {project.dimRed2}</li>
                        <li><strong>From 51D to 2D (Key Features excluding confounding)</strong>: {project.dimRed3}</li>
                    </ul>
                </div>
                <div className="grid-item content">
                    <div className="key-section">
                        <span className="key-text"><strong>Key:</strong></span>
                        <img src={key} alt="Legend of treatment status"/>
                    </div>
                </div>
                <div className="grid-item content"><div className="grid-item centered-text"><strong>All Features (including confounding)</strong></div></div>
                <div className="grid-item content"><img src={confounding} alt="Graph of all features including nonconfounding"/></div>

                <div className="grid-item content"><div className="grid-item centered-text"><strong>All Features (excluding confounding)</strong></div></div>
                <div className="grid-item content"><img src={excl_confounding} alt="Graph of all features including nonconfounding"/></div>

                <div className="grid-item content"><div className="grid-item centered-text"><strong>Key Features (excluding confounding)</strong></div></div>
                <div className="grid-item content"><img src={key_features} alt="Graph of all features including nonconfounding"/></div>
            </div>

            {/* Model Building & Performance */}
            <div className="project-grid">
                <div className="grid-item title">Model Building & Performance</div>
                <div className="grid-item content">{project.modelbuilding}</div>
                <div className="grid-item content">When using accuracy as the main metric, the <strong>Random Forest</strong> model performed the best.</div>
                <div className="grid-item content">Alongside assessing accuracy, our analysis extended to computing key error metrics for each model, including the misclassification rate, true positive rate, true negative rate, and false negative rate.</div>
            </div>

            <div className="project-grid">
            <div className="grid-item centered-text"><strong>Neural Network</strong></div>
                <div className="grid-item content"><img src={neuralnet} alt="Performance of neural network in a table"/></div>

                <div className="grid-item centered-text"><strong>Decision Tree</strong></div>
                <div className="grid-item content"><img src={decisiontree} alt="Performance of decision tree in a table"/></div>

                <div className="grid-item centered-text"><strong>Random Forest</strong></div>
                <div className="grid-item content"><img src={randomforest} alt="Performance of random forest in a table"/></div>
            </div>

            {/* Model Building & Performance Pt 2*/}
            <div className="project-grid">
                <div className="grid-item title">Model Building & Performance</div>
                <div className="grid-item content">In our model evaluation strategy, we recognized the importance of selectively prioritizing different error metrics to guide our choice of the most appropriate model. In our case, our main objective was to <strong>minimize false negatives</strong>. This decision was driven by the nature of our study, where the cost of a false negative – failing to identify an individual who would benefit from seeking mental health treatment – was deemed more critical. </div>
                <div className="grid-item content">We created confusion matrices to visualize these rates. They are labeled as follows:</div>
                <div className="grid-item content">
                    <ul>
                        <li>Top left square: True Negative</li>
                        <li>Top right square: False Positive</li>
                        <li>Bottom left square: False Negative</li>
                        <li>Bottom right square: True Positive</li>
                    </ul>
                </div>
            </div>

            <div className="project-grid">
                <div className="grid-item content">We executed each model 10 times and found that 8 out of 10 times, the <strong>Random Forest</strong> model produced fewer false negatives compared to the other 2 models. </div>

                <div className="grid-item content-confusion-matrices"><img src={neuralnetFN} alt="Confusion matrices for neural network"/></div>
                <div className="grid-item content-confusion-matrices"><img src={decisiontreeFN} alt="Confusion matrices for decision tree"/></div>
                <div className="grid-item content-confusion-matrices"><img src={randomforestFN} alt="Confusion matrices for random forest"/></div>
            </div>

            {/* Model Building & Performance Pt 3*/}
            <div className="project-grid">
                <div className="grid-item title">Model Building & Performance</div>
                <div className="grid-item content">{project.modelbuildingROC1}</div>
                <div className="grid-item content">{project.modelbuildingROC2}</div>
                <div className="grid-item content">{project.modelbuildingROC3}</div>
                <div className="grid-item content">All in all, with the 3 metrics that we chose to assess, the <strong>Random Forest</strong> model consistently performed the best.</div>
                <div className="grid-item content"><img src={roc} alt="ROC curves by model"/></div>
            </div>

            {/* Conclusions & Implications */}
            <div className="project-grid">
                <div className="grid-item title">Conclusions & Implications</div>
                <div className="grid-item content">Through this process, we learned that the <strong>Random Forest model emerged as the most effective in predicting whether individuals in the tech industry would seek mental health treatment</strong>, with a particular emphasis on minimizing false negatives. </div>
                <div className="grid-item content">Additionally, our analysis revealed that <strong>individual characteristics</strong>, such as demographics and personal history, <strong>played a more crucial role than company-related factors</strong> in determining whether an individual sought mental health treatment. This underscores the importance of personalized approaches in addressing mental health issues in the workplace.</div>
                <div className="grid-item content"><i>What's next?</i> With these derived conclusions, we presented the following recommended actions for tech companies:</div>

                <div className="grid-item content">
                    <strong>(1) Implement identity and community-specific mental health programs </strong>
                    <li>Develop specific support systems and programs with resources tailored to specific groups that address unique challenges faced by these demographics, such as women and non-binary individuals in tech.</li>

                    <strong>(2) Advocate for cultural and policy changes in tech companies </strong>
                    <li>Adopt flexible work arrangements and comprehensive mental health/well-being benefits.</li>

                    <strong>(3) Invest in mental health education and awareness</strong>
                    <li>There should be a concerted effort to educate employees about mental health, including recognizing symptoms, understanding the importance of seeking help, and normalizing conversations about this topic. Regular training sessions, workshops, and seminars can be effective tools in this regard.</li>
                </div>
            </div>

            {/* Reflections */}
            <div className="project-grid">
                <div className="grid-item title">Reflections</div>
                <div className="grid-item content">{project.reflection1}</div>
                <div className="grid-item content">{project.reflection2}</div>
                <div className="grid-item content">{project.reflection3}</div>
            </div>





        </div>
    );
}

export default MentalHealthML;