"""
Convert Segment Anything PyTorch model to TensorRT
"""
from segment_anything import SamPredictor, sam_model_registry
import cv2
import torch

from server.utils.draw_mask import draw_mask_to_image

sam = sam_model_registry["vit_h"](checkpoint="server/pytorch_models/sam_vit_h_4b8939.pth")

# device = torch.device('cuda') if torch.cuda.is_available() else torch.device('cpu')
# sam = sam.to(device)

predictor = SamPredictor(sam)


image = cv2.imread("tmp/GettyImages-673968470.jpg")

with torch.no_grad():
    predictor.set_image(image)
    masks, mask_scores, _ = predictor.predict()

    print(masks.shape)

    image_with_mask = draw_mask_to_image(image, masks, mask_scores)

    cv2.imwrite("tmp/Segment.png", image_with_mask)


