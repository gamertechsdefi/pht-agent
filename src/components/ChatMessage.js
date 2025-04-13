export default function ChatMessage({ message, isUser }) {
    return (
      <div className={`my-2 flex ${isUser ? 'justify-end' : 'justify-start'}`}>
        <div className={`px-4 py-2 rounded-lg max-w-[70%] ${isUser ? 'bg-orange-500 text-white' : 'bg-gray-200 text-black'}`}>
          {message}
        </div>
      </div>
    );
  }
  