import React, { useState } from "react";
import bold from "/bold.svg";
import underline from "/underline.svg";
import italics from "/italics.svg";
import undo from "/undo.svg";
import redo from "/redo.svg";
import fontColor from "/fontColor.svg";
import { useCurrentEditor } from "@tiptap/react";

const Toolkit = ({ editor }) => {
	// if(!editor){
	//     return null
	// }
	if (!editor) {
		return null;
	}

	const [color, setColor] = useState("#000000");

	const handleColorChange = (event) => {
		const newColor = event.target.value;
		editor.chain().focus().setColor(newColor).run();
		setColor(newColor);
	};
	return (
		<div>
			<div className="border rounded-full flex px-4 py-1 justify-center items-center">
				<div className="flex items-center">
					<button onClick={() => editor.chain().focus().toggleBold().run()}>
						<img
							src={bold}
							alt="bold button"
							className={`p-1 hover:bg-gray-200 ${
								editor.isActive("bold") ? "bg-gray-200" : ""
							} rounded-lg`}
						/>
					</button>
					<button
						onClick={() => editor.chain().focus().toggleUnderline().run()}
					>
						<img
							src={underline}
							alt="underline button"
							className={`p-1 hover:bg-gray-200 ${
								editor.isActive("underline") ? "bg-gray-200" : ""
							} rounded-lg`}
						/>
					</button>
					<button onClick={() => editor.chain().focus().toggleItalic().run()}>
						<img
							src={italics}
							alt="italic button"
							className={`p-1 hover:bg-gray-200 ${
								editor.isActive("italic") ? "bg-gray-200" : ""
							} rounded-lg`}
						/>
					</button>
				</div>
				<div>|</div>
				<button
					onClick={() => editor.chain().focus().undo().run()}
					disabled={!editor.can().undo()}
					className={`${editor.can().undo() ? "hover:bg-gray-200" : ""} `}
				>
					<img src={undo} alt="bold button" className="p-1 " />
				</button>
				<button
					onClick={() => editor.chain().focus().redo().run()}
					disabled={!editor.can().redo()}
					className={`${editor.can().redo() ? "hover:bg-gray-200" : ""} `}
				>
					<img
						src={redo}
						alt="bold button"
						className="p-1 hover:bg-gray-200"
						onInput={(event) =>
							editor.chain().focus().setColor(event.target.value).run()
						}
					/>
				</button>
				<div>|</div>
				<input
					type="color"
					onInput={(event) =>
						editor.chain().focus().setColor(event.target.value).run()
					}
					onChange={handleColorChange}
					data-testid="setColor"
					value={editor.getAttributes("textStyle").color}
					data-testid="setColor"
				/>
                <button className=" font-bold  underline">
                    A
                </button>
			</div>
		</div>
	);
};

export default Toolkit;
