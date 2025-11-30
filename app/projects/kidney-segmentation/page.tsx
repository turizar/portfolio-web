import Link from 'next/link'
import Image from 'next/image'

export default function KidneySegmentationProject() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-gray-900">
            Tomas Urizar
          </Link>
          
          <div className="hidden md:flex space-x-6">
            <Link href="/#about" className="text-gray-700 hover:text-gray-900 transition">
              About
            </Link>
            <Link href="/#experience" className="text-gray-700 hover:text-gray-900 transition">
              Experience
            </Link>
            <Link href="/#projects" className="text-gray-700 hover:text-gray-900 transition">
              Projects
            </Link>
            <Link href="/#contact" className="text-gray-700 hover:text-gray-900 transition">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto">
          <Link 
            href="/#projects" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 transition"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Medical Image Segmentation with U-Net
              </h1>
              
              <p className="text-lg text-gray-700 mb-6">
                Deep learning model for precise blood vessel segmentation in kidney images using U-Net architecture and PyTorch.
              </p>
              
              <div className="flex gap-2 flex-wrap mb-6">
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Python</span>
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">PyTorch</span>
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">U-Net</span>
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Medical Imaging</span>
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Computer Vision</span>
              </div>
            </div>
            
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/projects/kidney-segmentation/kidney_seg_dice_v2_img1.png"
                alt="Kidney segmentation result showing input image, ground truth mask, and model prediction"
                width={600}
                height={400}
                className="object-cover w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Overview</h2>
          
          <div className="space-y-4 text-gray-700">
            <p>
              Precise blood vessel segmentation in kidney medical images is crucial for diagnosis and treatment planning. 
              This project automates this process using a U-Net architecture, generating pixel-level binary masks that 
              identify blood vessel locations in medical images.
            </p>
            <p>
              The model is designed for use by radiologists, surgeons, and medical researchers, providing faster and more 
              accurate analysis compared to manual identification methods.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-10 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Tech Stack</h2>
          
          <div className="flex flex-wrap gap-3">
            {['Python', 'PyTorch', 'OpenCV', 'NumPy', 'Matplotlib', 'Pillow', 'scikit-learn', 'Jupyter'].map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-white text-gray-700 rounded-md text-sm font-medium border border-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Dataset & Architecture */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Dataset & Architecture</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Dataset */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Dataset</h3>
              <div className="text-gray-700 space-y-2 text-sm">
                <p><strong>Type:</strong> Kidney medical images (512x512) with binary segmentation masks</p>
                <p><strong>Split:</strong> 70% train, 15% validation, 15% test</p>
                <p><strong>Preprocessing:</strong> Normalization, resizing, contrast adjustment</p>
              </div>
            </div>

            {/* Architecture */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Architecture</h3>
              <div className="text-gray-700 space-y-2 text-sm">
                <p><strong>Model:</strong> U-Net for semantic segmentation</p>
                <p><strong>Loss Function:</strong> Combined Dice Loss + Binary Cross-Entropy</p>
                <p><strong>Augmentation:</strong> Rotation, flips, zoom, brightness, contrast</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Results</h2>
          
          <div className="space-y-8">
            {/* Metrics */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Evaluation Metrics</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Training Metrics */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Training</h4>
                  <div className="grid grid-cols-5 gap-2">
                    <div className="bg-white p-3 rounded text-center border border-gray-200">
                      <div className="text-lg font-bold text-gray-800 mb-1">0.11</div>
                      <div className="text-xs text-gray-600">Loss</div>
                    </div>
                    <div className="bg-white p-3 rounded text-center border border-gray-200">
                      <div className="text-lg font-bold text-gray-800 mb-1">0.86</div>
                      <div className="text-xs text-gray-600">Dice</div>
                    </div>
                    <div className="bg-white p-3 rounded text-center border border-gray-200">
                      <div className="text-lg font-bold text-gray-800 mb-1">0.99</div>
                      <div className="text-xs text-gray-600">Acc</div>
                    </div>
                    <div className="bg-white p-3 rounded text-center border border-gray-200">
                      <div className="text-lg font-bold text-gray-800 mb-1">0.88</div>
                      <div className="text-xs text-gray-600">Prec</div>
                    </div>
                    <div className="bg-white p-3 rounded text-center border border-gray-200">
                      <div className="text-lg font-bold text-gray-800 mb-1">0.88</div>
                      <div className="text-xs text-gray-600">Rec</div>
                    </div>
                  </div>
                </div>

                {/* Validation Metrics */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Validation</h4>
                  <div className="grid grid-cols-5 gap-2">
                    <div className="bg-white p-3 rounded text-center border border-gray-200">
                      <div className="text-lg font-bold text-gray-800 mb-1">0.09</div>
                      <div className="text-xs text-gray-600">Loss</div>
                    </div>
                    <div className="bg-white p-3 rounded text-center border border-gray-200">
                      <div className="text-lg font-bold text-gray-800 mb-1">0.88</div>
                      <div className="text-xs text-gray-600">Dice</div>
                    </div>
                    <div className="bg-white p-3 rounded text-center border border-gray-200">
                      <div className="text-lg font-bold text-gray-800 mb-1">0.99</div>
                      <div className="text-xs text-gray-600">Acc</div>
                    </div>
                    <div className="bg-white p-3 rounded text-center border border-gray-200">
                      <div className="text-lg font-bold text-gray-800 mb-1">0.86</div>
                      <div className="text-xs text-gray-600">Prec</div>
                    </div>
                    <div className="bg-white p-3 rounded text-center border border-gray-200">
                      <div className="text-lg font-bold text-gray-800 mb-1">0.92</div>
                      <div className="text-xs text-gray-600">Rec</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Training Curves */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Training Curves</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-lg overflow-hidden shadow-md bg-white">
                  <Image
                    src="/projects/kidney-segmentation/kidney_seg_dice_v2_loss.png"
                    alt="Training and validation loss curves"
                    width={800}
                    height={500}
                    className="object-cover w-full h-auto"
                  />
                  <div className="bg-gray-50 text-center py-2 text-sm font-medium text-gray-700">
                    Loss Curve
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden shadow-md bg-white">
                  <Image
                    src="/projects/kidney-segmentation/kidney_seg_dice_v2_dice.png"
                    alt="Dice coefficient curves"
                    width={800}
                    height={500}
                    className="object-cover w-full h-auto"
                  />
                  <div className="bg-gray-50 text-center py-2 text-sm font-medium text-gray-700">
                    Dice Coefficient
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden shadow-md bg-white">
                  <Image
                    src="/projects/kidney-segmentation/kidney_seg_dice_v2_precision.png"
                    alt="Precision curves"
                    width={800}
                    height={500}
                    className="object-cover w-full h-auto"
                  />
                  <div className="bg-gray-50 text-center py-2 text-sm font-medium text-gray-700">
                    Precision Curve
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden shadow-md bg-white">
                  <Image
                    src="/projects/kidney-segmentation/kidney_seg_dice_v2_recall.png"
                    alt="Recall curves"
                    width={800}
                    height={500}
                    className="object-cover w-full h-auto"
                  />
                  <div className="bg-gray-50 text-center py-2 text-sm font-medium text-gray-700">
                    Recall Curve
                  </div>
                </div>
              </div>
            </div>
            
            {/* Visualizations */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Visualizations</h3>
              <p className="text-sm text-gray-600 mb-4">
                Each visualization shows three panels: <strong>Image</strong> (original kidney scan), 
                <strong>GT Mask</strong> (Ground Truth - manually annotated blood vessels), and <strong>Pred Mask</strong> (Predicted - model's segmentation output).
              </p>
              <div className="space-y-6">
                <div className="relative rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/projects/kidney-segmentation/kidney_seg_dice_v2_img1.png"
                    alt="Test example 1: Original image, ground truth mask, and predicted mask"
                    width={800}
                    height={500}
                    className="object-cover w-full h-auto"
                  />
                </div>
                <div className="relative rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/projects/kidney-segmentation/kidney_seg_dice_v2_img2.png"
                    alt="Test example 2: Original image, ground truth mask, and predicted mask"
                    width={800}
                    height={500}
                    className="object-cover w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dataset & Demo */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Dataset & Demo</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <a 
              href="https://www.kaggle.com/c/blood-vessel-segmentation/data" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition text-center border border-gray-200 hover:border-blue-400"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Dataset</h3>
              <p className="text-sm text-gray-600 mb-4">The model was trained on kidney_1_dense. You can use kidney_2 for testing the model.</p>
              <div className="text-blue-600 font-medium text-sm">View Dataset →</div>
            </a>
            
            <a 
              href="https://huggingface.co/spaces/turizar/kidney-segmentation-dice" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition text-center border border-gray-200 hover:border-purple-400"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Demo</h3>
              <p className="text-sm text-gray-600 mb-4">Try the model interactively</p>
              <div className="text-purple-600 font-medium text-sm">Open Demo →</div>
            </a>
          </div>
        </div>
      </section>

      {/* Conclusions */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Conclusions</h2>
          
          <div className="space-y-4 text-gray-700">
            <p>
              The model successfully achieved high-performance segmentation of kidney blood vessels, 
              with validation Dice score of 0.88, precision of 0.86, and recall of 0.92. The model demonstrates 
              strong generalization capabilities, as evidenced by validation metrics closely matching training performance.
            </p>
            <p>
              This project highlights the effectiveness of deep learning for medical image segmentation. The 
              combination of Dice Loss and Binary Cross-Entropy proved effective for handling class imbalance 
              in segmentation problems, while careful architecture design and data augmentation contributed to 
              the model's robust performance.
            </p>
            <p>
              The model's performance suggests potential for real-world clinical applications, though 
              additional validation on diverse datasets and clinical testing would be necessary before 
              deployment in medical settings.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-gray-400 text-center">
        <p>© {new Date().getFullYear()} Tomas Urizar Kleinknecht.</p>
      </footer>
    </main>
  )
}
